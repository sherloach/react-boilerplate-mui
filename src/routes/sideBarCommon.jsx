import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ShopIcon from '@mui/icons-material/Shop';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountCircle from '@mui/icons-material/AccountCircle';

// configs
import { PATH, DRAWER_MENU_LABEL } from 'configs';

export const sideBarCommon = [
  {
    subheader: 'General',
    items: [
      {
        title: 'Overview',
        href: PATH.DASHBOARD,
        icon: <DashboardIcon fontSize="small" />,
        label: DRAWER_MENU_LABEL.DASHBOARD,
      },
      {
        title: 'Account',
        href: PATH.ACCOUNT,
        icon: <AccountCircle fontSize="small" />,
        label: DRAWER_MENU_LABEL.ACCOUNT,
      },
      {
        title: 'Playbackground',
        href: PATH.PLAY_BACKGROUND,
        icon: <SportsEsportsIcon fontSize="small" />,
        label: DRAWER_MENU_LABEL.PLAY_BACKGROUND,
      },
    ],
  },
  {
    subheader: 'Management',
    items: [
      {
        title: 'Product',
        icon: <ShopIcon fontSize="small" />,
        href: PATH.PRODUCT,
        label: DRAWER_MENU_LABEL.PRODUCT,
        items: [
          {
            title: 'List',
            icon: <ViewListIcon fontSize="small" />,
            href: PATH.PRODUCT_LIST,
            label: DRAWER_MENU_LABEL.PRODUCT_LIST,
          },
          {
            title: 'Add',
            icon: <AddIcon fontSize="small" />,
            href: PATH.PRODUCT_ADD,
            label: DRAWER_MENU_LABEL.PRODUCT_ADD,
          },
        ],
      },
      {
        title: 'Users',
        icon: <PeopleIcon fontSize="small" />,
        href: PATH.USERS,
        label: DRAWER_MENU_LABEL.USERS,
      },
    ],
  },
  {
    subheader: 'Apps',
    items: [
      {
        title: 'Kanban',
        href: PATH.KANBAN,
        icon: <AssessmentIcon fontSize="small" />,
        label: DRAWER_MENU_LABEL.KANBAN,
      },
    ],
  },
];
