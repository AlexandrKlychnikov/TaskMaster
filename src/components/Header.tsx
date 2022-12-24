import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import imgLogo from './../assets/images/TM-logo.png';
import textLogoLight from './../assets/images/Text-logo-light.png';
import textLogoDark from './../assets/images/Text-logo-dark.png';
import { PAGE_PATH } from 'constants/navigation';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageType, ThemeType } from 'types/types';
import { LanguageSwitcher } from './LangSwither';

const pages = ['HOME', 'BOARDS', 'PROFILE'];
const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
  const [theme, setTheme] = React.useState<ThemeType>('dark');
  const [lang, setLang] = React.useState<LanguageType>('en');
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const themeColors = createTheme({
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: theme === 'dark' ? '#282c34' : '#61dafb',
            color: theme === 'dark' ? '#61dafb' : '#282c34',
          },
        },
      },
    },
  });

  const handleChangeWindowSize = () => {
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangeWindowSize);
    return () => {
      window.removeEventListener('resize', handleChangeWindowSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppBar sx={styles.dark} position="static">
      <ThemeProvider theme={themeColors}>
        <Container sx={{ maxWidth: '1280px' }}>
          <Toolbar disableGutters>
            <Avatar
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.25, width: 56, height: 56 }}
              src={imgLogo}
              alt="Logo"
            />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img src={textLogoDark} alt="logo" height="55" />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={`/${page}`}>{`${page.toLowerCase()}`}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 0.25 }}
              src={imgLogo}
              alt="logo"
            />
            <Box
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
              }}
            >
              <img src={textLogoDark} alt="logo" height="55" />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link key={page} to={PAGE_PATH[page as keyof typeof PAGE_PATH]}>
                  <Button onClick={handleCloseNavMenu} sx={buttonStyles}>
                    {`${page.toLowerCase()}`}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, mr: 1, display: { xs: 'block', md: 'none' } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Name Surname" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button sx={buttonStyles}>
                <Link state="logIn" to={`/auth`}>
                  Log In
                </Link>
              </Button>
              <Button sx={buttonStyles}>
                <Link state="signUp" to={`/auth`}>
                  Sign Up
                </Link>
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ThemeSwitcher theme={theme} setTheme={setTheme} />
              <LanguageSwitcher lang={lang} setLang={setLang} />
            </Box>
          </Toolbar>
        </Container>
      </ThemeProvider>
    </AppBar>
  );
}
export default ResponsiveAppBar;

const styles = {
  light: {
    backgroundColor: '#61dafb',
    color: '#282c34',
  },
  dark: {
    backgroundColor: '#282c34',
    color: '#61dafb',
  },
};

const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1em;
  color: ${styles.dark.color};
`;

const buttonStyles = {
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
