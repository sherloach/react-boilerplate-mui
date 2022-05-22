import { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// material core
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

// material icon
import AccountCircle from '@mui/icons-material/AccountCircle';

// configs
import { PATH } from 'configs';

// actions
import { logout } from 'containers/Auth/Auth.actions';

// selectors
import { roleSelector } from 'containers/Auth/Auth.selectors';

const Account = () => {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const role = useSelector(roleSelector);
  const [anchorEl, setAnchorEl] = useState(null);

  const _handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleClose = () => {
    setAnchorEl(null);
  };

  const _handleLogout = () => {
    dispatch(logout());
    history.push(PATH.LOGIN);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={_handleMenu}
        color="inherit"
      >
        <AccountCircle sx={{ fontSize: 40, color: 'text.secondary' }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={_handleClose}
      >
        <div style={{ padding: '6px 16px', marginBottom: 6, fontSize: '1rem' }}>{role}</div>
        <Divider />
        <MenuItem>{translate('PROFILE')}</MenuItem>
        <MenuItem sx={{ minWidth: 115 }} onClick={_handleLogout}>
          {translate('LOGOUT')}
        </MenuItem>
      </Menu>
    </>
  );
};

export default memo(Account);
