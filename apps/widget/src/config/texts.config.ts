export const TEXTS = {
  TITLES: {
    VALIDATE: 'Validate',
    UPLOAD: 'Upload',
    MAPPING: 'Mapping',
    REVIEW: 'Review',
    COMPLETE: 'Complete',
  },
  STEPS: {
    VALIDATE: 'Validate',
    UPLOAD: 'Upload',
    MAPPING: 'Mapping',
    REVIEW: 'Review',
    COMPLETE: 'Complete',
  },
  DROPZONE: {
    TITLE: 'Drop your file here or ',
    BROWSE: 'Browse',
    SUBTITLE: 'Bring any .csv or .xlsx file here to start Import',
    FILE_SELECTION: 'File selected successfully',
  },
  PHASE1: {
    SELECT_TITLE: 'Template',
    SELECT_PLACEHOLDER: 'Select Template',
    DOWNLOAD_SAMPLE_TITLE: 'Download sample csv file',
    DOWNLOAD_SAMPLE: 'Download sample',
    SEE_MAPPING: 'See Mapping',
    SELECT_FILE: 'Select a file',
  },
  PHASE2: {
    UPLOAD_AGAIN: 'Upload Again',
    SEE_REVIEW: 'Review Data',
    NAME_IN_SCHEMA_TITLE: 'Column in schema',
    NAME_IN_SHEET_TITLE: 'Column in your sheet',
  },
  PHASE3: {
    VALID_DATA_INFO: 'All {total} row(s) are found valid!',
    INVALID_DATA_INFO:
      'Out of {total} row(s), {invalid} row(s) have invalid data. Please update the data and try again.',
    EXPORT_DATA: 'Export Data',
    RE_REVIEW_DATA: 'Re-Review Data',
    COMPLETE: 'Complete',
    ALL_VALID_CONFIRMATION: 'All {total} row(s) found valid! Would you like to complete the Import?',
  },
  PHASE4: {
    CLOSE: 'Close',
  },
  CONFIRM_MODAL: {
    title: '{count} rows appears to be have wrong data',
    subTitle: 'You can choose to exempt wrong data or keep your wrong data and confirm your upload',
    EXEMPT_CONTINUE: 'Exempt wrong data and Continue',
    KEEP_CONTINUE: 'Continue with wrong data',
  },
  COMPLETE: {
    title: 'Bravo! {count} rows have been uploaded',
    subTitle: '{count} rows have been uploaded successfully, and currently is in process, it will be ready shortly.',
    UPLOAD_AGAIN: 'Upload new File',
  },
  PROMPT: {
    title: `Are you sure? You will lose your work in progress.`,
    SUBTITLE_CLOSE: 'Your import is in progress, clicking <b>Yes</b> will reset it.',
    SUBTITLE_RESET: 'Your import is in progress, clicking <b>Yes</b> will reset it.',
    YES: 'Yes',
    NO: 'No',
  },
  VALIDATION: {
    TEMPLATE_REQUIRED: 'Template is required',
    FILE_REQUIRED: 'File is required',
  },
  NOTIFICATIONS: {
    INCOMPLETE_TEMPLATE: {
      title: 'Sorry!',
      message: 'This import do not have any columns. Please try again after some time!',
    },
    TEMPLATE_NOT_FOUND: {
      title: 'Sorry!',
      message:
        "We couldn't find the template you're importing, Our team is informed about it. Please try again after some time!",
    },
  },
};
