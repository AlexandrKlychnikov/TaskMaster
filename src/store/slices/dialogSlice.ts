import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IDeleteProps {
  isOpen: boolean;
  id?: string;
}

const initialState = { newBoard: { isOpen: false }, deleteBoard: { isOpen: false, id: '' } };

const slices = createSlice({
  name: 'BoardDialog',
  initialState,
  reducers: {
    setOpenNewBoardDialog: (state, action: PayloadAction<IDeleteProps>) => {
      state.newBoard.isOpen = action.payload.isOpen;
      return state;
    },
    setDeleteBoardDialog: (state, action: PayloadAction<IDeleteProps>) => {
      state.deleteBoard.isOpen = action.payload.isOpen;
      if (action.payload.id) state.deleteBoard.id = action.payload.id;
      return state;
    },
  },
});

export const { setOpenNewBoardDialog, setDeleteBoardDialog } = slices.actions;

export default slices.reducer;
