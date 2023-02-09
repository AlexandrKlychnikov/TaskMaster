export enum Endpoint {
  BOARDS = '/boards',
  BOARDSSET = '/boardsSet',
  COLUMNS = '/columns',
  SIGN_IN = '/auth/signin',
  SIGN_UP = '/auth/signup',
  TASKS = '/tasks',
  USERS = '/users',
}

export enum PAGE_PATH {
  AUTH = '/auth',
  BOARDS = '/boards',
  HOME = '/',
  PROFILE = '/profile',
}

export const PAGES = ['HOME', 'BOARDS', 'NEW BOARD'];

export const AUTH_SETTINGS = ['Profile', 'Theme', 'Language', 'Logout'];

export const NOT_AUTH_SETTINGS = ['Log In', 'Sign Up', 'Theme', 'Language'];
