import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { setOpenNewBoardDialog } from 'store/slices/dialogSlice';

export const CloseButton = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setOpenNewBoardDialog(false));
  };
  return (
    <IconButton sx={{ position: 'absolute', top: '5px', right: '5px' }} onClick={handleClose}>
      <CloseIcon sx={{ color: '#282c34' }} />
    </IconButton>
  );
};
