import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { buttonStyles, Link } from './Header';
import { LanguageType, subPage } from 'types/types';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LangSwither';
import { useAppSelector } from 'store/hooks';
import { useTranslation } from 'react-i18next';

export const DesktopUserMenu = () => {
  const { theme, user } = useAppSelector((state) => state);
  const { t } = useTranslation();
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: user ? 'none' : 'flex' } }}>
        <Button sx={buttonStyles}>
          <Link state={subPage.logIn} to={`/auth`}>
            {t('header.logIn')}
          </Link>
        </Button>
        <Button sx={buttonStyles}>
          <Link state={subPage.signUp} to={`/auth`}>
            {t('header.signUp')}
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
