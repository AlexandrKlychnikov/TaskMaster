import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setTheme } from 'store/slices/themeSlice';

export const ThemeSwitcher = () => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const handleClickTheme = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(setTheme());
  };
  return (
    <CustomBox>
      {theme === 'dark' ? (
        <DarkModeIcon
          fontSize="small"
          sx={{ color: 'rgb(251, 191, 27)' }}
          onClick={handleClickTheme}
        />
      ) : (
        <LightModeOutlinedIcon fontSize="small" sx={{ color: 'red' }} onClick={handleClickTheme} />
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
