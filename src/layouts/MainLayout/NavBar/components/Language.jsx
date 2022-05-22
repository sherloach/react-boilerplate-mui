/* eslint-disable react/jsx-curly-brace-presence */
import { useState, memo } from 'react';

// material core
import { MenuItem, Button, Menu, ListItemIcon } from '@mui/material';

// configs
import { LANGUAGE } from 'configs';

// context
import { useGlobalContext } from 'context/GlobalContext';

function Language({ ...classes }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setLanguage, language } = useGlobalContext();

  const _handleOpenLanguage = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleChooseLanguage = (lang) => () => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderTextLanguage = () => {
    switch (language) {
      case LANGUAGE.ENGLISH: {
        return (
          <img
            src={`/assets/images/en.png`}
            alt="English Language"
            title="English Language"
            style={{ height: 24, width: 24 }}
          />
        );
      }
      case LANGUAGE.VIETNAMESE: {
        return (
          <img
            src={`/assets/images/vn.png`}
            alt="Tiếng Việt"
            title="Tiếng Việt"
            style={{ height: 24, width: 24 }}
          />
        );
      }
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        className={classes.menuLanguage}
        aria-controls="simple-menu"
        title="Change Language"
        aria-haspopup="true"
        onClick={_handleOpenLanguage}
      >
        {renderTextLanguage()}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          selected={language === LANGUAGE.ENGLISH}
          onClick={_handleChooseLanguage(LANGUAGE.ENGLISH)}
        >
          <ListItemIcon>
            <img
              src={`/assets/images/en.png`}
              alt="Logo"
              title="logo"
              style={{ height: 24, width: 24 }}
            />
          </ListItemIcon>
          English
        </MenuItem>
        <MenuItem
          selected={language === LANGUAGE.VIETNAMESE}
          onClick={_handleChooseLanguage(LANGUAGE.VIETNAMESE)}
        >
          <ListItemIcon>
            <img
              src={`/assets/images/vn.png`}
              alt="Logo"
              title="logo"
              style={{ height: 24, width: 24 }}
            />
          </ListItemIcon>
          Vietnamese
        </MenuItem>
      </Menu>
    </>
  );
}

export default memo(Language);
