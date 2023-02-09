import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LockIcon from '@mui/icons-material/Lock';
import { useAppDispatch } from 'store/hooks';
import { IFormInputs, subPage } from '../types/types';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import validationParams from 'utils/validation';
import { authFormStyles } from 'styles/authFormStyles';
import { setUser } from 'store/slices/authSlice';
import { PAGE_PATH } from 'constants/navigation';
import { signIn } from 'api/auth/signIn';
import { signUp } from 'api/auth/signUp';
import { parseBase64, setLocalStorage, UserDecoder } from 'utils/helpers';
import { LOCAL_STORAGE_KEY } from 'constants/common';

const RegForm = () => {
  const location = useLocation();
  const formType: subPage = location.state;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      name: '',
      login: '',
    },
  });

  const onSubmit = handleSubmit(async (data: IFormInputs) => {
    formType === subPage.signUp && (await signUp(data));
    const token = await signIn(data);
    const user: UserDecoder = parseBase64(token);
    const { login, id, exp } = user;
    setLocalStorage({ login, id, token, exp }, LOCAL_STORAGE_KEY);
    dispatch(setUser({ login, id, token, exp }));
    reset();
    navigate(PAGE_PATH.BOARDS);
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container
      sx={{
        maxWidth: '1280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Box sx={authFormStyles}>
        <Box
          sx={{
            '& .MuiSvgIcon-root': { color: '#61dafb !important', fontSize: '3rem' },
            margin: '10px',
          }}
        >
          {formType === subPage.signUp ? <LockPersonIcon /> : <LockIcon />}
        </Box>
        <form onSubmit={onSubmit} noValidate>
          <Stack direction={'column'} gap={2}>
            {formType === subPage.signUp && (
              <TextField
                label={'Name'}
                size={'small'}
                helperText={errors.name ? errors.name.message : null}
                {...register('name', validationParams('name'))}
              />
            )}
            <TextField
              label={'Login'}
              size={formType === subPage.logIn ? 'medium' : 'small'}
              helperText={errors.login ? errors.login.message : null}
              {...register('login', validationParams('login'))}
            />
            <TextField
              label={'Password'}
              size={formType === subPage.logIn ? 'medium' : 'small'}
              type={showPassword ? 'text' : 'password'}
              helperText={errors.password ? errors.password.message : null}
              InputProps={{
                autoComplete: formType === subPage.signUp ? 'new-password' : 'on',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register('password', validationParams('password'))}
            />
            {formType === subPage.signUp && (
              <TextField
                label={'Password Repeat'}
                type={showPassword ? 'text' : 'password'}
                helperText={errors.password_repeat ? errors.password_repeat.message : null}
                {...register('password_repeat', validationParams('password_repeat', watch))}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            <Button
              type={'submit'}
              variant={'outlined'}
              sx={{
                width: '50%',
                margin: '0 auto',
                color: '#61dafb',
                fontWeight: '700',
                border: '1px solid #61dafb',
                whiteSpace: 'nowrap',
              }}
            >
              {formType === subPage.logIn ? 'Login In' : 'Sign Up'}
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default RegForm;
