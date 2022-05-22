import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SnackbarProvider } from 'notistack';

// material core
import { ThemeProvider, createTheme } from '@mui/material/styles';

// context
import { useGlobalContext } from 'context/GlobalContext';

// containers
import Auth from 'containers/Auth/Auth';

// themes
import themes from 'themes';
import { THEMES } from 'configs';

// routes
import Routes from 'routes/Routes';

function App() {
  // 0: light, 1: dark
  const { i18n } = useTranslation();
  const { modeTheme, language } = useGlobalContext();
  const type = modeTheme === THEMES.LIGHT ? 0 : 1;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <ThemeProvider theme={themes(type)}>
      <BrowserRouter>
        <Auth>
          <SnackbarProvider
            autoHideDuration={process.env.REACT_APP_AUTO_HIDE_SNACKBAR || 3000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            maxSnack={process.env.REACT_APP_MAX_SNACKBAR || 3}
          >
            <Routes />
          </SnackbarProvider>
        </Auth>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
