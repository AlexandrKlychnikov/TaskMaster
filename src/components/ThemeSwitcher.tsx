import React from 'react';
import styled from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ThemeType } from 'types/types';
import { Dispatch, SetStateAction } from 'react';

interface IThemeSwitcher {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeSwitcher = ({ theme, setTheme }: IThemeSwitcher) => {
  const handleClickTheme = () => {
    setTheme((state: ThemeType) => (state === 'dark' ? 'light' : 'dark'));
  };
  return (
    <CustomBox>
      {theme === 'dark' ? (
        <DarkModeIcon fontSize="small" onClick={handleClickTheme} />
      ) : (
        <LightModeOutlinedIcon fontSize="small" onClick={handleClickTheme} />
      )}
    </CustomBox>
  );
};

const CustomBox = styled.div`
  color: rgb(251, 191, 27);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
`;
