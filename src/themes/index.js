// material core
import { createTheme } from '@mui/material';

import light from './light';
import dark from './dark';
import typography from './typography';
import breakpoints from './breakpoints';
import components from './components';
import shadows from './shadows';

const typeTheme = [light, dark];

const themes = (type) =>
  createTheme({
    breakpoints,
    components: components(type),
    ...typeTheme[type],
    shape: {
      borderRadius: 8,
    },
    shadows,
    typography: { ...typography },
  });

export default themes;
