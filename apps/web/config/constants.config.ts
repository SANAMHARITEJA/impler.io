export const CONSTANTS = {
  GITHUB_LOGIN_URL: '/v1/auth/github',
  AUTH_COOKIE_NAME: 'authentication',
  AUTHENTICATION_ERROR_CODE: 'AuthenticationError',
  PROFILE_STORAGE_NAME: 'profile',
  REACT_DOCUMENTATION_URL: 'https://docs.impler.io/widget/react-component#props',
};

export const VARIABLES = {
  DEFAULT_ICON_SIZE: 24,
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  TEN: 10,
  TWENTY: 20,
  THIRTY: 30,
  FORTY: 40,
  FIFTY: 50,
  TWO_HUNDREDS: 200,
  THREE_HUNDREDS: 300,
};

export const MODAL_KEYS = {
  IMPORT_CREATE: 'IMPORT_CREATE',
  IMPORT_UPDATE: 'IMPORT_UPDATE',
  COLUMN_CREATE: 'COLUMN_CREATE',
  COLUMN_UPDATE: 'COLUMN_UPDATE',
  COLUMN_DELETE: 'COLUMN_DELETE',

  VALIDATIONS_OUTPUT: 'VALIDATIONS_OUTPUT',
};

export const MODAL_TITLES = {
  IMPORT_CREATE: 'Start with a new Import',
  COLUMN_CREATE: 'Add a new Column',
  IMPORT_UPDATE: 'Update Import',
  IMPORT_DELETE: 'Delete Import',
  COLUMN_UPDATE: 'Update Column',
  COLUMN_DELETE: 'Delete Column',

  VALIDATIONS_OUTPUT: 'Test code output',
};

export const API_KEYS = {
  PROJECT_SWITCH: 'PROJECT_SWITCH',
  PROJECTS_LIST: 'PROJECT_LIST',
  PROJECT_CREATE: 'PROJECT_CREATE',
  PROJECT_ENVIRONMENT: 'PROJECT_ENVIRONMENT',

  LOGOUT: 'LOGOUT',
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP',
  RESET_PASSWORD: 'RESET_PASSWORD',
  REQUEST_FORGOT_PASSWORD: 'REQUEST_FORGOT_PASSWORD',

  TEMPLATES_LIST: 'TEMPLATES_LIST',
  TEMPLATES_CREATE: 'TEMPLATES_CREATE',
  TEMPLATE_DETAILS: 'TEMPLATE_DETAILS',
  TEMPLATE_UPDATE: 'TEMPLATE_UPDATE',
  TEMPLATE_DELETE: 'TEMPLATE_DELETE',
  TEMPLATE_COLUMNS_LIST: 'TEMPLATE_COLUMNS_LIST',
  TEMPLATE_CUSTOMIZATION_GET: 'CUSTOMIZATION_GET',
  TEMPLATE_COLUMNS_UPDATE: 'TEMPLATE_COLUMNS_UPDATE',
  TEMPLATE_CUSTOMIZATION_UPDATE: 'CUSTOMIZATION_UPDATE',

  COLUMN_CREATE: 'COLUMN_CREATE',
  COLUMN_UPDATE: 'COLUMN_UPDATE',
  COLUMN_DELETE: 'COLUMN_DELETE',

  VALIDATIONS: 'VALIDATIONS',
  VALIDATIONS_UPDATE: 'VALIDATIONS_UPDATE',

  IMPORTS_LIST: 'IMPORTS_LIST',
  IMPORT_SUMMARY: 'IMPORT_SUMMARY',

  ME: 'ME',
  REGENERATE: 'REGENERATE',
  DONWLOAD_ORIGINAL_FILE: 'DOWNLOAD_ORIGINAL_FILE',
};

export const NOTIFICATION_KEYS = {
  IMPORT_UPDATED: 'IMPORT_UPDATED',
  IMPORT_CREATED: 'IMPORT_CREATED',
  IMPORT_DELETED: 'IMPORT_DELETED',

  PROJECT_CREATED: 'PROJECT_CREATED',
  OUTPUT_UPDATED: 'OUTPUT_UPDATED',
  DESTINATION_UPDATED: 'DESTINATION_UPDATED',

  COLUMNS_UPDATED: 'COLUMNS_UPDATED',
  VALIDATIONS_UPDATED: 'VALIDATIONS_UPDATED',
  REGENERATED: 'REGENERATED',

  ERROR_OCCURED: 'ERROR_OCCURED',
};

export const ROUTES = {
  HOME: '/',
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  SIGNIN_ONBOARDING: '/auth/onboard',
  REQUEST_FORGOT_PASSWORD: '/auth/reset/request',
  IMPORTS: '/imports',
  SETTINGS: '/settings',
  ACTIVITIES: '/activities',
};

export const REGULAR_EXPRESSIONS = {
  URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,
};
