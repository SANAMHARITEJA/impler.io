import { useState } from 'react';

import { Modal } from '@ui/Modal';
import { variables } from '@config';
import { ParentWindow } from '@util';
import { IUpload } from '@impler/shared';
import { Phase1 } from './Phases/Phase1';
import { Phase2 } from './Phases/Phase2';
import { Phase3 } from './Phases/Phase3';
import { Phase4 } from './Phases/Phase4';
import { useWidget } from '@hooks/useWidget';
import { useAppState } from '@store/app.context';
import { PromptModal } from './Phases/PromptModal';
import { Layout } from 'components/Common/Layout';
import { PhasesEum, PromptModalTypesEnum } from '@types';
import { logAmplitudeEvent, resetAmplitude } from '@amplitude';
import { Phase0 } from './Phases/Phase0';

export function Widget() {
  const defaultDataCount = 0;
  const [phase, setPhase] = useState<PhasesEum>(PhasesEum.VALIDATE);
  const { terminateUpload } = useWidget();
  const [dataCount, setDataCount] = useState<number>(defaultDataCount);
  const [promptContinueAction, setPromptContinueAction] = useState<PromptModalTypesEnum>();
  const { showWidget, setShowWidget, reset: resetAppState, uploadInfo, templateInfo, title } = useAppState();

  const onUploadResetClick = () => {
    logAmplitudeEvent('RESET');
    setPromptContinueAction(PromptModalTypesEnum.UPLOAD_AGAIN);
  };
  const onPromptConfirm = () => {
    terminateUpload();
    setPromptContinueAction(undefined);
    ParentWindow.UploadTerminated({ uploadId: uploadInfo._id });
    if (promptContinueAction === PromptModalTypesEnum.CLOSE) closeWidget();
    resetProgress();
  };
  const onPromptCancel = () => {
    setPromptContinueAction(undefined);
  };
  const onClose = () => {
    if ([PhasesEum.VALIDATE, PhasesEum.UPLOAD, PhasesEum.COMPLETE].includes(phase)) closeWidget();
    else setPromptContinueAction(PromptModalTypesEnum.CLOSE);
  };
  const closeWidget = () => {
    setShowWidget(false);
    resetAmplitude();
    resetProgress();
    setTimeout(() => {
      ParentWindow.Close();
    }, variables.closeDelayInMS);
  };
  const resetProgress = () => {
    resetAppState();
    setPhase(PhasesEum.VALIDATE);
  };
  const onComplete = (uploadData: IUpload) => {
    setDataCount(uploadData.totalRecords);
    setPhase(PhasesEum.COMPLETE);
    ParentWindow.UploadCompleted(uploadData);
  };

  const PhaseView = {
    [PhasesEum.VALIDATE]: <Phase0 onValidationSuccess={() => setPhase(PhasesEum.UPLOAD)} />,
    [PhasesEum.UPLOAD]: <Phase1 onNextClick={() => setPhase(PhasesEum.MAPPING)} />,
    [PhasesEum.MAPPING]: <Phase2 onNextClick={() => setPhase(PhasesEum.REVIEW)} onPrevClick={onUploadResetClick} />,
    [PhasesEum.REVIEW]: <Phase3 onNextClick={onComplete} onPrevClick={onUploadResetClick} />,
    [PhasesEum.COMPLETE]: <Phase4 rowsCount={dataCount} onUploadAgainClick={resetProgress} onCloseClick={onClose} />,
  };

  return (
    <Modal title={title || templateInfo?.name} opened={showWidget} onClose={onClose}>
      <Layout active={phase} title={title || templateInfo?.name}>
        {PhaseView[phase]}
        <PromptModal
          onCancel={onPromptCancel}
          onConfirm={onPromptConfirm}
          opened={!!promptContinueAction}
          action={promptContinueAction}
        />
      </Layout>
    </Modal>
  );
}
