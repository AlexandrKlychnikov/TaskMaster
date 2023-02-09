export const authFormStyles = {
  maxWidth: '320px',
  p: 2,
  border: '1px solid',
  borderRadius: '7px',
  backgroundColor: '#282c34',
  '& .MuiTextField-root fieldset': {
    border: '1px solid white',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& > fieldset': { borderColor: '#61dafb' },
    '.MuiSvgIcon-root': { color: '#61dafb' },
  },
  '& .MuiTextField-root:hover fieldset': {
    borderColor: '#61dafb',
  },
  '& .MuiTextField-root input, & .MuiInputLabel-root, & .MuiSvgIcon-root': {
    color: '#ffff',
  },
  '& .MuiTextField-root label.Mui-focused': {
    color: '#61dafb',
  },
  '& .MuiTextField-root input:-webkit-autofill, input:-webkit-autofill:focus, input:-webkit-autofill:hover, input:-webkit-autofill:active':
    {
      WebkitTextFillColor: '#ffff',
      WebkitBoxShadow: '0 0 0px 40rem #282c34 inset',
    },
};
