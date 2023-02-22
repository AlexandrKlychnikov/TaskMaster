import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { ButtonProps } from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}

interface IButtonProps extends ButtonProps {
  components: {
    MuiButton: {
      variants: {
        variant: string;
      };
    };
  };
}

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'custom' } as IButtonProps,
          style: {
            fontWeight: 'bold',
            color: '#61dafb',
            borderRadius: '7px',
            backgroundColor: '#282c34',
            border: '1px solid #61dafb',
            '&:hover': { backgroundColor: 'white' },
          },
        },
      ],
    },
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
