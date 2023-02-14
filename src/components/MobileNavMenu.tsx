import React, { MouseEvent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from './Header';
import { useAppSelector } from 'store/hooks';
import { PAGES, PAGE_PATH } from 'constants/navigation';
import { useTranslation } from 'react-i18next';
export interface IMobileNavMenuProps {
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: Element | ((element: Element) => Element);
}

export const MobileNavMenu = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}: IMobileNavMenuProps) => {
  const { theme, user } = useAppSelector((state) => state);
  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: user ? 'flex' : 'none', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiMenu-list, & .MuiMenu-paper': {
            backgroundColor: theme === 'dark' ? '#282c34' : '#61dafb',
            color: theme === 'dark' ? '#61dafb' : '#282c34',
          },
        }}
      >
        {PAGES.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Link to={PAGE_PATH[page as keyof typeof PAGE_PATH]}>{t(`header.${page}`)}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
