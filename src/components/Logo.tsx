import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import imgLogo from './../assets/images/TM-logo.png';
import textLogo from './../assets/images/text-logo.png';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/navigation';

interface ILogoProps {
  size: string;
}

export const Logo = ({ size }: ILogoProps) => {
  const navigate = useNavigate();
  const sideSize = size === 'desktop' ? 56 : 44;
  const logoText = <img src={textLogo} alt="logo" height={sideSize} />;
  const logoImage = (
    <Avatar sx={{ mr: 0.25, width: sideSize, height: sideSize }} src={imgLogo} alt="logo" />
  );
  return (
    <>
      {size === 'desktop' ? (
        <Box
          sx={{ display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}
          onClick={() => navigate(PAGE_PATH.HOME)}
        >
          {logoImage}
          <Box sx={{ mr: 1 }}>{logoText}</Box>
        </Box>
      ) : (
        <Box
          sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate(PAGE_PATH.HOME)}
        >
          {logoImage}
          <Box sx={{ mr: 2 }}>{logoText}</Box>
        </Box>
      )}
    </>
  );
};
