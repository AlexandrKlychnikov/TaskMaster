import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { setDeleteBoardDialog, setOpenNewBoardDialog } from 'store/slices/dialogSlice';

interface ICloseButtonProps {
  index: string;
}

export const CloseButton = ({ index }: ICloseButtonProps) => {
  const dispatch = useAppDispatch();

  const action = index === 'delete' ? setDeleteBoardDialog : setOpenNewBoardDialog;

  const handleClose = () => {
    dispatch(action({ isOpen: false }));
  };
  return (
    <IconButton sx={{ position: 'absolute', top: '5px', right: '5px' }} onClick={handleClose}>
      <CloseIcon sx={{ color: '#282c34' }} />
    </IconButton>
  );
};
