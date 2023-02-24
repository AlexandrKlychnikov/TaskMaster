import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PAGES, PAGE_PATH } from 'constants/navigation';
import React, { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { buttonStyles, Link } from './Header';
import { useTranslation } from 'react-i18next';
import { setOpenNewBoardDialog } from 'store/slices/dialogSlice';

interface IDesktopMenuProps {
  handleCloseNavMenu: () => void;
}

export const DesktopNavMenu = ({ handleCloseNavMenu }: IDesktopMenuProps) => {
  const { user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const handleClick = (event: MouseEvent) => {
    if (event.currentTarget.id === 'NEW BOARD') {
      dispatch(setOpenNewBoardDialog(true));
      handleCloseNavMenu();
    } else {
      handleCloseNavMenu();
    }
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {user &&
        PAGES.map((page) => (
          <Link key={page} to={PAGE_PATH[page as keyof typeof PAGE_PATH]}>
            <Button id={page} onClick={handleClick} sx={buttonStyles}>
              {t(`header.${page}`)}
            </Button>
          </Link>
        ))}
    </Box>
  );
};
