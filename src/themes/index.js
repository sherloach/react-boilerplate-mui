// material core
import { createTheme } from '@mui/material';

import light from './light';
import dark from './dark';
import typography from './typography';
import breakpoints from './breakpoints';
import components from './components';
import shadows from './shadows';

const typeTheme = [light, dark];

// TODO: change background-color of table head that fits both of dark and light theme
const themes = (type) =>
  createTheme({
    breakpoints,
    components,
    ...typeTheme[type],
    shape: {
      borderRadius: 8,
    },
    shadows,
    typography: { ...typography },
  });

export default themes;
