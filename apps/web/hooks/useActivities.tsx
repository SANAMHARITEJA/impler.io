import { useQuery } from '@tanstack/react-query';

import { commonApi } from '@libs/api';
import { track } from '@libs/amplitude';
import { API_KEYS } from '@config';
import { IErrorObject, ISummaryData } from '@impler/shared';
import { useAppState } from 'store/app.context';

export function useSummary() {
  const { profileInfo } = useAppState();
  const { data: summaryData, isLoading: isSummaryLoading } = useQuery<
    unknown,
    IErrorObject,
    ISummaryData,
    (string | undefined)[]
  >(
    [API_KEYS.IMPORT_SUMMARY, profileInfo?._projectId],
    () =>
      commonApi<ISummaryData>(API_KEYS.IMPORT_SUMMARY as any, {
        parameters: [profileInfo!._projectId],
      }),
    {
      enabled: !!profileInfo,
      onSuccess: () => {
        track({
          name: 'VIEW SUMMARY',
          properties: {},
        });
      },
    }
  );

  return {
    summaryData,
    isSummaryLoading,
  };
}
