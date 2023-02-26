import { IBoardsOutput } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IBoardsOutput[] = [];

const slices = createSlice({
  name: 'Boards',
  initialState,
  reducers: {
    setBoards: (state: IBoardsOutput[], action: PayloadAction<IBoardsOutput[]>) => {
      return action.payload;
    },
  },
});

export const { setBoards } = slices.actions;

export default slices.reducer;
