import { memo } from 'react';
import PropTypes from 'prop-types';

// material core
import { Box, IconButton, Toolbar, Tooltip } from '@mui/material';

// material icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// components
import Account from './components/Account';
import DarkMode from './components/DarkMode';
import Language from './components/Language';

// styles
import { NavbarRoot } from './styles';

const NavBar = ({ onSidebarOpen, ...others }) => {
  return (
    <>
      <NavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: 'calc(100% - 280px)',
          },
        }}
        {...others}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Language />
          <DarkMode />
          <Account />
          {/* <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <AccountCircleIcon fontSize="small" />
          </Avatar> */}
        </Toolbar>
      </NavbarRoot>
    </>
  );
};

NavBar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default memo(NavBar);
