import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';

// material core
import {
  Avatar,
  Button,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';

// material icons
import EditIcon from '@mui/icons-material/Edit';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// helpers
import { getInitials } from 'helpers/getInitials';

// configs
import { PATH } from 'configs/paths';

const UserList = ({ users, ...rest }) => {
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = users.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedUserIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUserIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedUserIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedUserIds.slice(1));
    } else if (selectedIndex === selectedUserIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedUserIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedUserIds.slice(0, selectedIndex),
        selectedUserIds.slice(selectedIndex + 1),
      );
    }

    setSelectedUserIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedUserIds.length === users.length}
                    color="primary"
                    indeterminate={
                      selectedUserIds.length > 0 && selectedUserIds.length < users.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>LOCATION</TableCell>
                <TableCell>PHONE</TableCell>
                <TableCell>REGISTRATION DATE</TableCell>
                <TableCell>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(0, limit).map((user) => (
                <TableRow hover key={user.id} selected={selectedUserIds.indexOf(user.id) !== -1}>
                  <TableCell sx={{ borderBottom: 1, borderColor: 'divider' }} padding="checkbox">
                    <Checkbox
                      checked={selectedUserIds.indexOf(user.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar src={user.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(user.name)}
                      </Avatar>
                      <Box>
                        <Typography color="textPrimary" variant="body1">
                          {user.name}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {user.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {`${user.address.city}, ${user.address.state}, ${user.address.country}`}
                  </TableCell>
                  <TableCell sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {user.phone}
                  </TableCell>
                  <TableCell sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {format(user.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Button
                      component={RouterLink}
                      to={`${PATH.USERS}/${user.id}${PATH.EDIT}`}
                      disableRipple
                      sx={{
                        color: 'neutral.400',
                        minWidth: 0,
                        p: 1,
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      component={RouterLink}
                      to={`${PATH.USERS}/${user.id}`}
                      disableRipple
                      sx={{
                        color: 'neutral.400',
                        minWidth: 0,
                        p: 1,
                      }}
                    >
                      <ArrowRightAltIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={users.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

UserList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.array.isRequired,
};

export default UserList;
