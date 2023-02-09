import { createSlice } from '@reduxjs/toolkit';

const initialState = 'dark';

const slices = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      return state === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { setTheme } = slices.actions;

export default slices.reducer;
