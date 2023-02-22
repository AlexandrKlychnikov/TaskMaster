import { ThemeType } from 'types/types';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1280px',
    padding: '0 0 0 6px',
  },
  heroTextDescription: {
    textAlign: 'start',
    width: { xs: '75%', md: '100%' },
    fontSize: { xs: '1em', md: '1.25em', lg: '1.5em' },
    paddingRight: '10px',
  },
  sectionGridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: { xs: 'center', md: 'space-between' },
    width: '100%',
    minHeight: '400px',
  },
  sectionGridItem(theme: ThemeType) {
    return {
      backgroundColor: theme === 'dark' ? '#282c34' : 'lightgray',
      color: theme === 'dark' ? 'white' : '#282c34',
      textAlign: 'center',
      padding: '20px',
      width: '200px',
      minHeight: { xs: '200px', md: '300px' },
      borderRadius: '10px',
      margin: '10px !important',
    };
  },
  advantagesIcon(theme: ThemeType) {
    return {
      alignSelf: 'center',
      fontSize: { xs: 75, md: 100 },
      color: theme === 'dark' ? '#61dafb' : '#282c34',
    };
  },
  testimonialCard(theme: ThemeType) {
    return {
      backgroundColor: theme === 'dark' ? '#282c34' : 'lightgray',
      color: theme === 'dark' ? 'white' : '#282c34',
      padding: '10px',
      minHeight: { xs: '200px', md: '300px' },
      display: 'flex',
      alignItems: 'center',
    };
  },
  testimonialStatement: {
    paddingBottom: '25px',
  },
  avatar: {
    marginRight: '10px',
  },
  testimonialPosition(theme: ThemeType) {
    return {
      color: theme === 'dark' ? '#61dafb' : '#282c34',
      fontSize: '1em',
      opacity: '0.6',
    };
  },
};

export default styles;
