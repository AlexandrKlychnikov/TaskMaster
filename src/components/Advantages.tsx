import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { useTranslation } from 'react-i18next';
import styles from '../styles/styles';
import { useAppSelector } from 'store/hooks';
import { ThemeType } from 'types/types';

const Advantages = () => {
  const theme = useAppSelector((state) => state.theme) as ThemeType;
  const { t } = useTranslation();
  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={styles.advantagesIcon(theme)} />,
      sentence: t('main.advantagesOne'),
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={styles.advantagesIcon(theme)} />,
      sentence: t('main.advantagesTwo'),
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={styles.advantagesIcon(theme)} />,
      sentence: t('main.advantagesThree'),
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '300px',
      }}
    >
      <Grid container sx={styles.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid item xs={10} md={3.5} key={item.id} sx={styles.sectionGridItem(theme)}>
            {item.icon}
            <Typography sx={{ fontSize: { xs: '1em', md: '1.25em' } }}>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Advantages;
