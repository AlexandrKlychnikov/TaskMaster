import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          color: 'white',
        },
      },
    },
  },
});
