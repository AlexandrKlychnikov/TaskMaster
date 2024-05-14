import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import useMediaQuery from '@mui/material/useMediaQuery';

const actions = [
  { icon: <EditIcon />, name: 'Edit board' },
  { icon: <DeleteForeverIcon />, name: 'Delete board' },
  { icon: <NoteAddIcon />, name: 'Create column' },
];

export default function BoardManagement() {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <SpeedDial
      sx={{
        '& .MuiSpeedDial-fab, &:hover .MuiSpeedDial-fab, & .MuiSpeedDialAction-fab, &:hover .MuiSpeedDialAction-fab':
          { backgroundColor: '#282c34' },
        '& .MuiSvgIcon-root': { color: '#61dafb' },
      }}
      icon={
        <SpeedDialIcon
          icon={<AutoFixHighIcon fontSize="large" sx={{ position: 'relative', top: '-5px' }} />}
        />
      }
      direction={matches ? 'right' : 'down'}
      ariaLabel="SpeedDial to manage of board"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipPlacement="left"
        />
      ))}
    </SpeedDial>
  );
}
