import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));
