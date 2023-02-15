import React from 'react';
import kanban from '../assets/images/kanban-bg.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Home = () => {
  return (
    <Container sx={{ maxWidth: '1280px', padding: '0 0 0 6px', border: '1px solid red' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '50%' }}>
          <Typography>Taskmaster</Typography>
        </Box>
        <Box sx={{ width: '50%' }}>
          <img src={kanban} alt="kanban" width="100%" />
        </Box>
      </Box>
    </Container>
  );
};
