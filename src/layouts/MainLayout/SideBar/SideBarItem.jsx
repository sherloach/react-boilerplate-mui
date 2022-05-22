import { NavLink as RouterLink, useLocation, matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';

// material core
import { Box, Button, ListItem } from '@mui/material';

// components
import SideBarExpandItem from './SideBarExpandItem';

// styles
import { sideBarButton } from './styles';

const SideBarItem = ({
  depth,
  icon,
  title,
  href,
  label,
  isExternalLink = false,
  children,
  ...others
}) => {
  const location = useLocation();
  const active = href
    ? !!matchPath(location.pathname, {
        path: href,
        end: false,
      })
    : false;

  if (children) {
    return (
      <SideBarExpandItem title={title} icon={icon} open={active}>
        {children}
      </SideBarExpandItem>
    );
  }

  return (
    <ListItem
      disableGutters
      key={title}
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 1,
      }}
      {...others}
    >
      <Button
        component={RouterLink}
        to={href}
        startIcon={icon}
        disableRipple
        sx={() => sideBarButton(active)}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
};

SideBarItem.propTypes = {
  depth: PropTypes.number,
  label: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  isExternalLink: PropTypes.string,
};

export default SideBarItem;
