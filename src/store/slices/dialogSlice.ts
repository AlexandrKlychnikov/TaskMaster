import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const slices = createSlice({
  name: 'NewBoardDialog',
  initialState,
  reducers: {
    setOpenNewBoardDialog: (state: boolean, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setOpenNewBoardDialog } = slices.actions;

export default slices.reducer;
