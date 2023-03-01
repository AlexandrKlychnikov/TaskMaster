import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { isProgress: false, isSuccess: false, isLoading: false, action: '' };

const slices = createSlice({
  name: 'Alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<{ isProgress: boolean; action?: string }>) => {
      state.isProgress = action.payload.isProgress;
      state.action = action.payload.action ? action.payload.action : state.action;
      return state;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      return state;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
      return state;
    },
  },
});

export const { setAlert, setSuccess, setLoading } = slices.actions;

export default slices.reducer;
