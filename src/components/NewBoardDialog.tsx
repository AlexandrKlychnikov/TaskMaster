import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setOpenNewBoardDialog } from 'store/slices/dialogSlice';
import { CloseButton } from './CloseButton';
import { createNewBoard } from 'api/boards/createNewBoard';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/navigation';

export default function NewBoardDialog() {
  const { t } = useTranslation();
  const {
    board: {
      newBoard: { isOpen: open },
    },
    user,
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const title = React.useRef(null);
  const description = React.useRef(null);
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(setOpenNewBoardDialog({ isOpen: false }));
  };

  const handleCreate = () => {
    async function newBoard() {
      const board = await createNewBoard(
        {
          title: title.current.value,
          description: description.current.value,
          owner: user.id,
          users: [],
        },
        user.token
      );
      dispatch(setOpenNewBoardDialog({ isOpen: false }));
      navigate(`${PAGE_PATH.BOARDS}/${board._id}`);
    }
    newBoard();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <CloseButton index="new" />
        <DialogTitle>{t('windows.newBoardDialogTitle')}</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={title}
            autoFocus
            margin="dense"
            id="title"
            label={t('windows.boardTitle')}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={description}
            margin="dense"
            id="description"
            label={t('windows.boardDescription')}
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('windows.cancel')}</Button>
          <Button onClick={handleCreate}>{t('windows.create')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
