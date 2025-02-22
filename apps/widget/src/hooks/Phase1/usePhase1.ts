import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { logAmplitudeEvent } from '@amplitude';
import { useMutation, useQuery } from '@tanstack/react-query';

import { variables } from '@config';
import { IImportConfig, downloadFile } from '@impler/shared';
import { useAPIState } from '@store/api.context';
import { useAppState } from '@store/app.context';
import { IFormvalues, IUploadValues } from '@types';
import { useImplerState } from '@store/impler.context';
import { IErrorObject, IOption, ITemplate, IUpload } from '@impler/shared';
import { downloadFileFromURL, getFileNameFromUrl, notifier, ParentWindow } from '@util';

interface IUsePhase1Props {
  goNext: () => void;
}

export function usePhase1({ goNext }: IUsePhase1Props) {
  const { api } = useAPIState();
  const [templates, setTemplates] = useState<IOption[]>([]);
  const { setUploadInfo, setTemplateInfo, setImportConfig, output, schema, data } = useAppState();
  const { projectId, templateId, authHeaderValue, extra } = useImplerState();
  const [isDownloadInProgress, setIsDownloadInProgress] = useState<boolean>(false);
  const { isFetched: isImportConfigLoaded, isLoading: isImportConfigLoading } = useQuery<
    IImportConfig,
    IErrorObject,
    IImportConfig
  >(['importConfig'], () => api.getImportConfig(projectId), {
    onSuccess(importConfigResponse) {
      setImportConfig(importConfigResponse);
    },
    onError(error: IErrorObject) {
      notifier.showError({ message: error.message, title: error.error });
    },
  });
  const {
    data: dataTemplates,
    isFetched,
    isLoading,
  } = useQuery<ITemplate[], IErrorObject, ITemplate[], string[]>(
    ['templates', projectId],
    () => api.getTemplates(projectId),
    {
      onSuccess(templatesResponse) {
        setTemplates(
          templatesResponse.map((item) => ({
            label: item.name,
            value: item._id,
          }))
        );
      },
      onError(error: IErrorObject) {
        notifier.showError({ message: error.message, title: error.error });
      },
    }
  );
  const { isLoading: isUploadLoading, mutate: submitUpload } = useMutation<IUpload, IErrorObject, IUploadValues>(
    ['upload'],
    (values: any) => api.uploadFile(values),
    {
      onSuccess(uploadData) {
        ParentWindow.UploadStarted({ templateId: uploadData._templateId, uploadId: uploadData._id });
        setUploadInfo(uploadData);
        goNext();
      },
      onError(error: IErrorObject) {
        notifier.showError({ title: error.error, message: error.message });
      },
    }
  );
  const { mutate: getSignedUrl } = useMutation<string, IErrorObject, [string, string]>(
    ['getSignedUrl'],
    ([fileUrl]) => api.getSignedUrl(getFileNameFromUrl(fileUrl)),
    {
      onSuccess(signedUrl, queryVariables) {
        downloadFileFromURL(signedUrl, queryVariables[variables.firstIndex]);
      },
      onError(error: IErrorObject) {
        notifier.showError({ title: error.error, message: error.message });
      },
    }
  );
  const { mutate: downloadSample } = useMutation<ArrayBuffer, IErrorObject, [string, string]>(
    ['downloadSample'],
    ([providedTemplateId]) => api.downloadSample(providedTemplateId, data, schema),
    {
      onSuccess(excelFileData, queryVariables) {
        downloadFile(
          new Blob([excelFileData], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          }),
          queryVariables[variables.firstIndex] as string
        );
      },
    }
  );
  const {
    control,
    register,
    trigger,
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormvalues>();

  useEffect(() => {
    if (templateId) {
      setValue('templateId', templateId);
      const foundTemplate = dataTemplates?.find((templateItem) => templateItem._id === templateId);
      if (foundTemplate) {
        setTemplateInfo(foundTemplate);
      }
    }
  }, [templateId, dataTemplates]);

  const findTemplate = (): ITemplate | undefined => {
    let foundTemplate: ITemplate | undefined;
    const selectedTemplateValue = getValues('templateId');
    if (selectedTemplateValue && dataTemplates) {
      foundTemplate = dataTemplates.find((templateItem) => templateItem._id === selectedTemplateValue);
    }
    if (!foundTemplate) notifier.showError('TEMPLATE_NOT_FOUND');
    else if (foundTemplate.totalColumns === variables.baseIndex) notifier.showError('INCOMPLETE_TEMPLATE');
    else return foundTemplate;

    return undefined;
  };
  const onTemplateChange = (newTemplateId: string) => {
    const foundTemplate = dataTemplates?.find((templateItem) => templateItem._id === newTemplateId);
    if (foundTemplate) {
      setTemplateInfo(foundTemplate);
      setValue('templateId', newTemplateId);
      trigger('templateId');
    }
  };
  const onDownload = async () => {
    setIsDownloadInProgress(true);
    const isTemplateValid = await trigger('templateId');
    if (!isTemplateValid) {
      setIsDownloadInProgress(false);

      return;
    }

    const foundTemplate = findTemplate();
    if (foundTemplate && ((Array.isArray(data) && data.length > variables.baseIndex) || schema)) {
      downloadSample([foundTemplate._id, foundTemplate.name + '.xlsx']);
    } else if (foundTemplate && foundTemplate.sampleFileUrl) {
      getSignedUrl([foundTemplate.sampleFileUrl, foundTemplate.name + ' (sample).xlsx']);
    }
    setIsDownloadInProgress(false);
  };

  const onSubmit = (submitData: IFormvalues) => {
    const foundTemplate = findTemplate();
    if (foundTemplate) {
      submitData.templateId = foundTemplate._id;
      logAmplitudeEvent('UPLOAD', { fileSize: submitData.file.size, fileType: submitData.file.type });
      submitUpload({
        ...submitData,
        authHeaderValue,
        extra,
        schema,
        output,
      });
    }
  };

  return {
    control,
    errors,
    setError,
    register,
    templates,
    onDownload,
    isUploadLoading,
    onTemplateChange,
    isDownloadInProgress,
    isInitialDataLoaded: isFetched && !isLoading && isImportConfigLoaded && !isImportConfigLoading,
    showSelectTemplate: !templateId,
    onSubmit: handleSubmit(onSubmit),
  };
}
