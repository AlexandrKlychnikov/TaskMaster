import { Dispatch, SetStateAction } from 'react';

export type ThemeType = 'light' | 'dark';
export type LanguageType = 'en' | 'ru';
export type Viewport = 'desktop' | 'mobile';

export enum subPage {
  logIn = 'logIn',
  signUp = 'signUp',
}

export interface ISubPage {
  page: number;
}

export enum formInputs {
  name = 'name',
  login = 'login',
  password = 'password',
}

export interface IFormInputs {
  name?: string;
  login: string;
  password: string;
  password_repeat?: string;
}

export interface ILanguageSwitcher {
  lang: LanguageType;
  setLang: Dispatch<SetStateAction<LanguageType>>;
}

export interface IUserAPI {
  _id: string;
  name: string;
  login: string;
}

export interface IUserInfo {
  exp: number;
  id: string;
  login: string;
  token: string;
}

export interface ISignInResponse {
  token: string;
}
