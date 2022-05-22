import { useState } from 'react';

// material core
import { CssBaseline, Box } from '@mui/material';

// components
import SideBar from './SideBar';
import NavBar from './NavBar';

// styles
import { DashboardLayoutRoot } from './styles';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <DashboardLayoutRoot>
        <CssBaseline />

        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <NavBar onSidebarOpen={() => setSidebarOpen(true)} />
      <SideBar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};

export default MainLayout;
