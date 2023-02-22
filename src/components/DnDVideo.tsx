import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../styles/styles';
import dnd from '../assets/video/dnd.mp4';
import Groups3Icon from '@mui/icons-material/Groups3';
import { useAppSelector } from 'store/hooks';
import { ThemeType } from 'types/types';
import { Video } from 'styles/styledComponents';

const DnDVideo = () => {
  const { t } = useTranslation();
  const theme = useAppSelector((state) => state.theme) as ThemeType;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        minHeight: '300px',
      }}
    >
      <Box
        sx={{
          flex: { xs: '1 300px', sm: '1 500px', md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          minHeight: '250px',
        }}
      >
        <Groups3Icon sx={styles.advantagesIcon(theme)} />
        <Typography
          variant="h3"
          sx={{ fontSize: '1.75em', textAlign: { xs: 'center', md: 'start' } }}
        >
          {t('main.dndHeading')}
        </Typography>
        <br />
        <Typography sx={{ fontSize: '1.25em', textAlign: { xs: 'center', md: 'start' } }}>
          {t('main.dndDescription')} <br /> Drag-n-Drop
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: { xs: '1 300px', sm: '1 500px', md: 7 },
          minHeight: { xs: '300px', md: '500px' },
        }}
      >
        <Video autoPlay playsInline loop>
          <source src={dnd} type="video/mp4" />
        </Video>
      </Box>
    </Box>
  );
};

export default DnDVideo;
