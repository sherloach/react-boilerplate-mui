import { useState, memo } from 'react';
import PropTypes from 'prop-types';

// material core
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';

// material icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { sideBarButton, SideBarTitleExpand } from './styles';

const SideBarExpandItem = ({ title, icon, open = false, children }) => {
  const [isExpand, setIsExpand] = useState(open);

  const handleToggle = () => {
    setIsExpand((prevOpen) => !prevOpen);
  };

  return (
    <ListItem disableGutters key={title} sx={{ display: 'block', mb: 0.5, py: 0, px: 1 }}>
      <Button onClick={handleToggle} startIcon={icon} disableRipple sx={() => sideBarButton(open)}>
        <SideBarTitleExpand>{title}</SideBarTitleExpand>
        {isExpand ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </Button>
      <Collapse in={isExpand} sx={{ mt: 1 }}>
        {children}
      </Collapse>
    </ListItem>
  );
};

SideBarExpandItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  open: PropTypes.bool,
};

export default memo(SideBarExpandItem);
