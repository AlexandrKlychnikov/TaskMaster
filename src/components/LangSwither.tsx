import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { LanguageType } from 'types/types';

export const LanguageSwitcher = () => {
  const [lang, setLang] = useState<LanguageType>('en');
  const handleClickTheme = () => {
    setLang((state: LanguageType) => (state === 'en' ? 'ru' : 'en'));
  };
  return (
    <CustomBox onClick={handleClickTheme}>
      <LanguageOutlinedIcon fontSize="small" />
      <Box width={2}>{lang === 'en' ? 'en' : 'ru'}</Box>
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
