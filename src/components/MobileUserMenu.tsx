import React, { MouseEvent, ReactNode } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { AUTH_MENU_ITEMS, NOT_AUTH_MENU_ITEMS, PAGE_PATH } from 'constants/navigation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'store/slices/authSlice';
import { subPage } from 'types/types';
import { LOCAL_STORAGE_KEY } from 'constants/common';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LangSwither';
import { setTheme } from 'store/slices/themeSlice';
import { useTranslation } from 'react-i18next';
export interface IMobileUserMenuProps {
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: (event?: MouseEvent<HTMLElement>) => void;
  anchorElUser: Element | ((element: Element) => Element);
}

interface IHandleClick {
  [index: string]: () => void;
}

interface IMenuItemIcon {
  [index: string]: ReactNode;
}

export const MobileUserMenu = ({
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
}: IMobileUserMenuProps) => {
  const { theme, user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const menuItemIcon: IMenuItemIcon = {
    Profile: <PersonOutlineIcon />,
    Theme: <ThemeSwitcher />,
    Language: <LanguageSwitcher />,
    Logout: <PowerSettingsNewIcon sx={{ color: 'red' }} />,
  };

  const handleClick: IHandleClick = {
    'log in': () => {
      navigate(PAGE_PATH.AUTH, { state: subPage.logIn });
    },
    'sign up': () => {
      navigate(PAGE_PATH.AUTH, { state: subPage.signUp });
    },
    profile: () => {
      navigate(PAGE_PATH.PROFILE);
    },
    theme: () => {
      dispatch(setTheme());
    },
    language: () => {
      i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    },
    logout: () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      dispatch(setUser(null));
      navigate(PAGE_PATH.HOME);
    },
  };

  return (
    <Box sx={{ flexGrow: 0, mr: 1, display: { xs: 'block', md: user ? 'block' : 'none' } }}>
      <Tooltip title={t('header.tooltip')}>
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
        {(user ? AUTH_MENU_ITEMS : NOT_AUTH_MENU_ITEMS).map((menuItem) => (
          <MenuItem key={menuItem} onClick={handleCloseUserMenu}>
            <Box
              sx={{ display: 'flex', alignItems: 'center', color: menuItem === 'Logout' && 'red' }}
              onClick={handleClick[menuItem.toLocaleLowerCase()]}
            >
              {t(`header.${menuItem}`)}
              {menuItemIcon[menuItem]}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
