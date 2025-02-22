import { isBrowser, ENVTypesEnum } from '@impler/shared';
import { getContextPath, ImplerComponentEnum } from '@impler/shared';

export const API_URL =
  isBrowser() && (window as any).Cypress
    ? window._env_?.REACT_APP_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:1336'
    : window._env_?.REACT_APP_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const SENTRY_DSN = window._env_?.REACT_APP_SENTRY_DSN || process.env.REACT_APP_SENTRY_DSN || undefined;

export const AMPLITUDE_ID = window._env_?.REACT_APP_AMPLITUDE_ID || process.env.REACT_APP_AMPLITUDE_ID || undefined;

export const ENV: ENVTypesEnum = window._env_?.REACT_APP_ENVIRONMENT || process.env.REACT_APP_ENVIRONMENT || 'local';

export const CONTEXT_PATH = getContextPath(ImplerComponentEnum.WIDGET);
