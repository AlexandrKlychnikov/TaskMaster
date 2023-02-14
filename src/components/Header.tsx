import React, { useEffect, useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeType } from 'types/types';
import { Logo } from './Logo';
import { MobileNavMenu } from './MobileNavMenu';
import { MobileUserMenu } from './MobileUserMenu';
import { useAppSelector } from 'store/hooks';
import { DesktopUserMenu } from './DesktopUserMenu';
import { DesktopNavMenu } from './DesktopNavMenu';

function ResponsiveAppBar() {
  const { theme, user } = useAppSelector((state) => state);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event?: MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    const menuItem = event.currentTarget.textContent;
    const lang = menuItem.slice(0, 4);
    if (menuItem !== 'Theme' && lang !== 'Lang' && lang !== 'Язык') {
      setAnchorElUser(null);
    }
  };

  const handleChangeWindowSize = () => {
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangeWindowSize);
    return () => {
      window.removeEventListener('resize', handleChangeWindowSize);
    };
  }, [user]);

  return (
    <AppBar sx={styles[theme as ThemeType]} position="static">
      <Container sx={{ maxWidth: '1280px', padding: '0 0 0 6px' }}>
        <Toolbar disableGutters>
          <Logo size={'desktop'} />
          <MobileNavMenu
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <Logo size={'mobile'} />
          <DesktopNavMenu handleCloseNavMenu={handleCloseNavMenu} />
          <MobileUserMenu
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
            anchorElUser={anchorElUser}
          />
          <DesktopUserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

type IStyles = {
  [index in ThemeType]: {
    backgroundColor: string;
    color: string;
  };
};

export const styles: IStyles = {
  light: {
    backgroundColor: '#61dafb',
    color: '#282c34',
  },
  dark: {
    backgroundColor: '#282c34',
    color: '#61dafb',
  },
};

export const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1em;
  color: ${styles.dark.color};
`;

export const buttonStyles = {
  my: 0.5,
  mx: 1,
  py: 2,
  color: 'inherit',
  textTransform: 'capitalize',
  fontSize: '1em',
  borderRadius: '50%',
  '&:hover': {
    textShadow: '5px 0 10px',
  },
};
