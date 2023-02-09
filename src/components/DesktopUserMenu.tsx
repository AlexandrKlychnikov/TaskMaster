import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { buttonStyles, Link } from './Header';
import { LanguageType, subPage } from 'types/types';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LangSwither';
import { useAppSelector } from 'store/hooks';

export const DesktopUserMenu = () => {
  const { theme, user } = useAppSelector((state) => state);
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: user ? 'none' : 'flex' } }}>
        <Button sx={buttonStyles}>
          <Link state={subPage.logIn} to={`/auth`}>
            Log In
          </Link>
        </Button>
        <Button sx={buttonStyles}>
          <Link state={subPage.signUp} to={`/auth`}>
            Sign Up
          </Link>
        </Button>
      </Box>
      <Box sx={{ display: { xs: 'none', md: user ? 'none' : 'flex' } }}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </Box>
    </>
  );
};
