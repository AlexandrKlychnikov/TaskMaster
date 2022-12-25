import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const slices = createSlice({
  name: 'authorized',
  initialState,
  reducers: {
    setAuthorized(state: boolean, action: PayloadAction<boolean>) {
      state = action.payload;
    },
  },
});

export const { setAuthorized } = slices.actions;

export default slices.reducer;
