import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PAGES, PAGE_PATH } from 'constants/navigation';
import React from 'react';
import { useAppSelector } from 'store/hooks';
import { buttonStyles, Link } from './Header';

interface IDesktopMenuProps {
  handleCloseNavMenu: () => void;
}

export const DesktopNavMenu = ({ handleCloseNavMenu }: IDesktopMenuProps) => {
  const { user } = useAppSelector((state) => state);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {user &&
        PAGES.map((page) => (
          <Link key={page} to={PAGE_PATH[page as keyof typeof PAGE_PATH]}>
            <Button onClick={handleCloseNavMenu} sx={buttonStyles}>
              {`${page.toLowerCase()}`}
            </Button>
          </Link>
        ))}
    </Box>
  );
};
