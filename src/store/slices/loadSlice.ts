import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const slices = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLoading } = slices.actions;

export default slices.reducer;
