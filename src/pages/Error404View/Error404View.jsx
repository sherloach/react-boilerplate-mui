import { Link as RouterLink } from 'react-router-dom';

// material core
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontSize: 150,
    lineHeight: '150px',
    fontWeight: 700,
    color: '#252932',
    textShadow:
      'rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;fontSize: 150',
  },
}));

function Error404View() {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
          className={classes.heading}
        >
          404
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Sorry, page not found
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <Button color="secondary" component={RouterLink} to="/" variant="outlined">
            Back to home
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Error404View;
