import React, { MouseEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { AUTH_SETTINGS, NOT_AUTH_SETTINGS, PAGE_PATH } from 'constants/navigation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'store/slices/authSlice';
import { subPage } from 'types/types';
import { LOCAL_STORAGE_KEY } from 'constants/common';

export interface IMobileUserMenuProps {
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  anchorElUser: Element | ((element: Element) => Element);
}

interface IHandleClick {
  [index: string]: () => void;
}

export const MobileUserMenu = ({
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
}: IMobileUserMenuProps) => {
  const { theme, user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick: IHandleClick = {
    'log in': () => {
      navigate(PAGE_PATH.AUTH, { state: subPage.logIn });
    },
    'sign up': () => {
      navigate(PAGE_PATH.AUTH, { state: subPage.signUp });
    },
    profile: () => {
      alert('profile');
    },
    logout: () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      dispatch(setUser(null));
      navigate(PAGE_PATH.HOME);
    },
  };

  return (
    <Box sx={{ flexGrow: 0, mr: 1, display: { xs: 'block', md: user ? 'block' : 'none' } }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Name Surname" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: '45px',
          '& .MuiMenu-list, & .MuiMenu-paper': {
            backgroundColor: theme === 'dark' ? '#282c34' : '#61dafb',
            color: theme === 'dark' ? '#61dafb' : '#282c34',
          },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {(user ? AUTH_SETTINGS : NOT_AUTH_SETTINGS).map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center" onClick={handleClick[setting.toLocaleLowerCase()]}>
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
