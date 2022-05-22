import { useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// material core
import {
  Box,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  List,
  ListSubheader,
} from '@mui/material';

// configs
import { sideBarCommon } from 'routes/sideBarCommon';

// components
import SideBarItem from './SideBarItem';

export const SideBar = ({ open, onClose }) => {
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (open && onClose) {
        onClose();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname],
  );

  const renderSideNavItems = ({ items, pathname, depth }) => {
    return (
      <List disablePadding>
        {items?.reduce((acc, curr) => renderChildRoutes({ acc, curr, pathname, depth }), [])}
      </List>
    );
  };

  const renderChildRoutes = ({ acc, curr, pathname, depth = 0 }) => {
    const key = curr.title + depth;

    if (curr.items) {
      acc.push(
        <SideBarItem
          key={`multi-${key}`}
          depth={depth}
          icon={curr.icon}
          title={curr.title}
          href={curr.href}
          label={curr.label}
          isExternalLink={curr.isExternalLink}
        >
          {renderSideNavItems({
            items: curr.items,
            depth: depth + 1,
            pathname,
          })}
        </SideBarItem>,
      );
    } else {
      acc.push(
        <SideBarItem
          key={`alone-${key}`}
          depth={depth}
          href={curr.href}
          icon={curr.icon}
          title={curr.title}
          label={curr.label}
          isExternalLink={curr.isExternalLink}
        />,
      );
    }
    return acc;
  };

  const renderSidebarCommon = (sidebars) => {
    return (
      <>
        {sidebars.map((nav) => {
          return (
            <List
              key={nav.subheader}
              subheader={<ListSubheader disableSticky>{nav.subheader}</ListSubheader>}
            >
              {renderSideNavItems({ items: nav.items, pathname: location.pathname })}
            </List>
          );
        })}
      </>
    );
  };

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                title="logo"
                style={{ height: 42, width: 42 }}
              />
            </Link>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Acme Inc
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Your tier : Premium
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>{renderSidebarCommon(sideBarCommon)}</Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideBar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default memo(SideBar);
