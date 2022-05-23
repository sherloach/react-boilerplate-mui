import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// material core
import { Box, Container, Typography } from '@mui/material';

// material icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// configs
import { PATH } from 'configs/paths';

// components
import UserAddProfile from './UserAddProfile';

const UserAdd = () => {
  return (
    <>
      <Helmet>
        <title>Add User | Material Kit</title>
      </Helmet>
      <Box
        component="main"
        sx={{
          py: 3,
          px: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 3 }}>
            <Typography
              component={Link}
              to={PATH.USER_LIST}
              sx={{
                display: 'flex',
                alignItems: 'center',
                m: 0,
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <ArrowBackIcon fontSize="small" sx={{ mr: 1 }} />
              Users
            </Typography>
          </Box>
          <Typography sx={{ mb: 3 }} variant="h4">
            Add User
          </Typography>
          <UserAddProfile />
        </Container>
      </Box>
    </>
  );
};

export default UserAdd;
