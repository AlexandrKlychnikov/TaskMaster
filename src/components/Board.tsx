import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { IBoardsOutput } from 'types/types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import GroupIcon from '@mui/icons-material/Group';
import Stack from '@mui/material/Stack';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import Tooltip from '@mui/material/Tooltip';

export const Board = ({ title, description }: Pick<IBoardsOutput, 'title' | 'description'>) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: { xs: '290px', md: '300px' },
        height: '250px',
        backgroundColor: 'skyblue',
        borderRadius: '5px',
        padding: '10px 10px 5px',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Tooltip title="Open board">
          <IconButton sx={{ alignSelf: 'start', width: '40px' }}>
            <OpenWithIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <Typography
        paragraph
        sx={{
          height: '100%',
          border: '1px solid white',
          textAlign: 'start',
          marginTop: '10px',
          padding: '5px',
        }}
      >
        {description}
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <Tooltip title="Participants">
          <IconButton sx={{ width: '40px' }}>
            <GroupIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete board">
          <IconButton sx={{ width: '40px' }}>
            <DeleteForeverIcon sx={{ color: 'red' }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};
