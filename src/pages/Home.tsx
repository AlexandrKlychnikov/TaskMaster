import React from 'react';
import kanban from '../assets/images/kanban-bg.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from 'styles/styles';
import { useTranslation } from 'react-i18next';
import Advantages from 'components/Advantages';
import Button from '@mui/material/Button';
import DnDVideo from 'components/DnDVideo';
import Testimonials from 'components/Testimonials';
import ToolsVideo from 'components/ToolsVideo';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Container sx={styles.container}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ width: { xs: '100%', md: '50%' }, padding: '30px 10px 10px 0' }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: 'start',
              textShadow: '1px 1px 1px orange',
              fontSize: { xs: '1.5em', md: '1.75em', lg: '2em' },
            }}
          >
            Taskmaster{' '}
            <Typography
              variant="body2"
              component="span"
              sx={{ fontSize: '0.75em', textShadow: 'none' }}
            >
              — {t('main.heroSubheading')}.
            </Typography>
          </Typography>
          <br />
          <Typography paragraph={true} sx={styles.heroTextDescription}>
            {t('main.heroText')} Taskmaster.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button variant="custom" sx={{ fontSize: { xs: '0.75em', md: '1em' } }}>
              {t('header.Sign Up')}
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <img src={kanban} alt="kanban" width="100%" />
        </Box>
      </Box>
      <Advantages />
      <DnDVideo />
      <ToolsVideo />
      <Testimonials />
    </Container>
  );
};
