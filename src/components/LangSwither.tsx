import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleClickTheme = (event: MouseEvent) => {
    event.stopPropagation();
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <CustomBox onClick={handleClickTheme}>
      <LanguageOutlinedIcon fontSize="small" />
      <Box width={2}>{i18n.language}</Box>
    </CustomBox>
  );
};

const CustomBox = styled.div`
  color: white;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
`;
