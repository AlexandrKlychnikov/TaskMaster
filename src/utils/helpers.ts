import { LOCAL_STORAGE_KEY } from 'constants/common';
import { IUserInfo } from 'types/types';

export const isTokenExpired = (date: number): boolean => {
  const res = Date.now() + 10000 > date * 1000;
  return res;
};

export const getLocalStorage = (key = LOCAL_STORAGE_KEY): IUserInfo | null => {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : null;
};

export const setLocalStorage = <T>(content: T, key = LOCAL_STORAGE_KEY): void => {
  localStorage.setItem(key, JSON.stringify(content));
};

export type UserDecoder = {
  exp: number;
  iat: number;
  id: string;
  login: string;
};

interface IParseBase64 {
  (token: string): UserDecoder;
}

export const parseBase64: IParseBase64 = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((symbol) => '%' + `00${symbol.charCodeAt(0).toString(16)}`.slice(-2))
      .join('')
  );

  return JSON.parse(jsonPayload);
};
