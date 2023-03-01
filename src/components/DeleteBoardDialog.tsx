import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setDeleteBoardDialog } from 'store/slices/dialogSlice';
import { CloseButton } from './CloseButton';
import Typography from '@mui/material/Typography';
import { deleteBoard } from 'api/boards/deleteBoard';
import { setAlert, setLoading, setSuccess } from 'store/slices/alertSlice';

export default function DeleteBoardDialog() {
  const { t } = useTranslation();
  const {
    user: { token },
    board: {
      deleteBoard: { isOpen: open, id },
    },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setDeleteBoardDialog({ isOpen: false, id: '' }));
  };

  const handleDelete = async () => {
    dispatch(setDeleteBoardDialog({ isOpen: false, id: '' }));
    dispatch(setAlert({ isProgress: true, action: 'delete' }));
    dispatch(setLoading(true));
    const board = await deleteBoard(token, id);
    if (board) {
      dispatch(setSuccess(true));
    } else {
      dispatch(setSuccess(false));
    }
    dispatch(setLoading(false));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <CloseButton index="delete" />
        <DialogTitle>{t('windows.warningTitle')}</DialogTitle>
        <DialogContent>
          <Typography>{t('windows.warningDescription')}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('windows.cancel')}</Button>
          <Button color="warning" onClick={handleDelete}>
            {t('windows.delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
