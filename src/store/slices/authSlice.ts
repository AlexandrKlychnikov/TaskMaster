import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEY } from 'constants/common';
import { IUserInfo } from 'types/types';
import { isTokenExpired, getLocalStorage } from 'utils/helpers';

const getInitialStateFromLocalStorage = (): IUserInfo | null => {
  const stateFromLocalStorage: IUserInfo | null = getLocalStorage();
  if (stateFromLocalStorage) {
    const isExpired = isTokenExpired(stateFromLocalStorage.exp);
    if (!isExpired) {
      return stateFromLocalStorage;
    }
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
  return null;
};

const initialState = getInitialStateFromLocalStorage();

const slices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IUserInfo | null, action: PayloadAction<IUserInfo>) => {
      return action.payload;
    },
  },
});

export const { setUser } = slices.actions;

export default slices.reducer;
