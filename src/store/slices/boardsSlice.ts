import { IBoardOutput } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IBoardOutput[] = [];

const slices = createSlice({
  name: 'Boards',
  initialState,
  reducers: {
    setBoards: (state: IBoardOutput[], action: PayloadAction<IBoardOutput[]>) => {
      return action.payload;
    },
  },
});

export const { setBoards } = slices.actions;

export default slices.reducer;
