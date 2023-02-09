import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Boards = () => {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h2">Boards</Typography>
    </Container>
  );
};
