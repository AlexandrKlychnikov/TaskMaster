import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Boards = () => {
  return (
    <Container
      fixed
      sx={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h2">Boards</Typography>
    </Container>
  );
};
