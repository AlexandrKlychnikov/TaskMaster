import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setAlert, setSuccess } from 'store/slices/alertSlice';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface IMessage {
  [index: string]: IStateOfAction;
}

interface IStateOfAction {
  loading: string;
  success: string;
  error: string;
}

export default function AlertSnackbar() {
  const {
    alert: { isProgress: open, isSuccess, action, isLoading: loading },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const message: IMessage = {
    create: {
      loading: 'The board is adding to the server.',
      success: 'The board has been added to the server.',
      error: 'The board has not been added!',
    },
    delete: {
      loading: 'The board is being removed from the server.',
      success: 'The board has been removed from the server.',
      error: 'The board has not been removed!',
    },
  };

  const handleClose = () => {
    dispatch(setAlert({ isProgress: false }));
    dispatch(setSuccess(false));
  };

  // useEffect(() => {
  //   return function () {
  //     dispatch(setSuccess(false));
  //   };
  // });

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={loading ? 6000 : 2000}
        open={open}
        onClose={handleClose}
      >
        {loading ? (
          <Alert
            onClose={handleClose}
            severity="info"
            sx={{
              width: '100%',
              fontSize: '1em',
              color: 'white',
              marginTop: '50%',
              backgroundColor: '#282c34',
            }}
          >
            {message[action].loading}
            <Box mt={1} sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          </Alert>
        ) : isSuccess ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{
              width: '100%',
              marginTop: '50%',
              fontSize: '1em',
              color: 'white',
              backgroundColor: 'green',
            }}
          >
            {message[action]?.success}
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{
              visibility: !open ? 'hidden' : null,
              width: '100%',
              marginTop: '50%',
              fontSize: '1em',
              color: 'white',
              backgroundColor: 'red',
            }}
          >
            {message[action]?.error}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
