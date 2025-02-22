import { UpdateRecord } from './update-cell';
import { DoReview } from './do-review/do-review.usecase';
import { DoReReview } from './do-review/re-review-data.usecase';
import { StartProcess } from './start-process/start-process.usecase';
import { ConfirmReview } from './confirm-review/confirm-review.usecase';
import { GetUpload } from '@shared/usecases/get-upload/get-upload.usecase';
import { UpdateImportCount } from './update-import-count/update-import-count.usecase';
import { GetUploadData } from './get-upload-data/get-upload-data.usecase';

import { UpdateImportCountCommand } from './update-import-count/update-import-count.command';

export const USE_CASES = [
  DoReview,
  GetUpload,
  DoReReview,
  UpdateRecord,
  StartProcess,
  ConfirmReview,
  GetUploadData,
  UpdateImportCount,
  //
];

export { DoReview, DoReReview, GetUpload, UpdateRecord, StartProcess, ConfirmReview, GetUploadData, UpdateImportCount };
export { UpdateImportCountCommand };
