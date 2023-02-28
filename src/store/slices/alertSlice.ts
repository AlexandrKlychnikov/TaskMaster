import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { isProgress: false, isSuccess: false, action: '' };

const slices = createSlice({
  name: 'Alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<{ isProgress: boolean; action?: string }>) => {
      state.isProgress = action.payload.isProgress;
      state.action = action.payload.action ? action.payload.action : state.action;
      return state;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
      return state;
    },
  },
});

export const { setAlert, setSuccess } = slices.actions;

export default slices.reducer;
