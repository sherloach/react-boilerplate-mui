import { memo } from 'react';

// material core
import { IconButton, Tooltip } from '@mui/material';

// material icon
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// configs
import { THEMES } from 'configs';

// context
import { useGlobalContext } from 'context/GlobalContext';

const DarkMode = () => {
  const { modeTheme, setModeTheme } = useGlobalContext();

  const _handleChangeTheme = () => {
    const type = modeTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setModeTheme(type);
  };

  return (
    <Tooltip title="Changes Theme">
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={_handleChangeTheme}
      >
        {modeTheme === THEMES.LIGHT ? (
          <Brightness4Icon sx={{ color: 'text.secondary' }} />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default memo(DarkMode);
