import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// material core
import { Box, Container } from '@mui/material';

// mocks
import { users } from '__mocks__/users';

// components
import UserList from './UserList';
import UserToolbar from './UserToolbar';

const Users = () => {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Users | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <UserToolbar />
          <Box sx={{ pt: 3 }}>
            <UserList users={users} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Users;
