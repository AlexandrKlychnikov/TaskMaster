import React from 'react';
import kanban from '../assets/images/kanban-bg.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Typography';

export const Home = () => {
  return (
    <Container sx={{ maxWidth: '1280px', padding: '0 0 0 6px' }}>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography>Taskmaster</Typography>
        </Box>
        <img src={kanban} alt="kanban" width="50%" />
      </Box>
    </Container>
  );
};
