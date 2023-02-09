import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: red[500],
          textAlign: 'start',
          margin: 0,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});
