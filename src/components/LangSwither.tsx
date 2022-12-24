import React from 'react';
import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { LanguageType } from 'types/types';

interface ILanguageSwitcher {
  lang: LanguageType;
  setLang: Dispatch<SetStateAction<LanguageType>>;
}

export const LanguageSwitcher = ({ lang, setLang }: ILanguageSwitcher) => {
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
