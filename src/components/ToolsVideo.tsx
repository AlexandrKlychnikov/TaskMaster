import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '../styles/styles';
import tools from '../assets/video/tools.mp4';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useAppSelector } from 'store/hooks';
import { ThemeType } from 'types/types';
import { Video } from 'styles/styledComponents';

const ToolsVideo = () => {
  const { t } = useTranslation();
  const theme = useAppSelector((state) => state.theme) as ThemeType;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap-reverse',
        flexGrow: 1,
        minHeight: '300px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: { xs: '1 300px', sm: '1 500px', md: 7 },
          minHeight: { xs: '300px', md: '500px' },
        }}
      >
        <Video autoPlay playsInline loop>
          <source src={tools} type="video/mp4" />
        </Video>
      </Box>
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
        <ConstructionIcon sx={styles.advantagesIcon(theme)} />
        <Typography variant="h3" sx={{ fontSize: '1.75em', textAlign: 'center' }}>
          {t('main.toolsHeading')}
        </Typography>
        <br />
        <Typography sx={{ fontSize: '1.25em', textAlign: 'center' }}>
          {t('main.toolsDescription')}
        </Typography>
      </Box>
    </Box>
  );
};

export default ToolsVideo;
