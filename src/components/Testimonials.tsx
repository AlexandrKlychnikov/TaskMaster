import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import styles from '../styles/styles';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';
import { ThemeType } from 'types/types';

const Testimonials = () => {
  const { t } = useTranslation();
  const theme = useAppSelector((state) => state.theme) as ThemeType;
  const reviews = [
    {
      id: 1,
      name: 'Karl Brighton',
      statement: t('main.testimonialStatementOne'),
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
      position: 'Software Engineer at Kadex',
    },
    {
      id: 2,
      name: 'Krishna Bells',
      statement: t('main.testimonialStatementTwo'),
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
      position: 'Product Manager at Google',
    },
    {
      id: 3,
      name: 'Ben Spiff',
      statement: t('main.testimonialStatementThree'),
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
      position: 'Founder of Crypto',
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item sm={12} md={4} key={review.id}>
            <Card sx={styles.testimonialCard(theme)}>
              <CardContent>
                <Typography sx={styles.testimonialStatement}>{review.statement}</Typography>
                <Box sx={{ display: 'flex' }}>
                  <Avatar src={review.image_url} sx={styles.avatar} />
                  <Box>
                    <Typography>{review.name}</Typography>
                    <Typography sx={styles.testimonialPosition(theme)}>
                      {review.position}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
