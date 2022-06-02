import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material core
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// material icon
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// configs
import { ROLE } from 'configs';

// actions
import { login } from 'containers/Auth/Auth.actions';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

export default function Login() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('hoango');
  const [role, setRole] = useState('ADMIN');

  const _onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(name, role, history));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form noValidate onSubmit={_onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
            <Select fullWidth value={role} onChange={(e) => setRole(e.target.value)} label="Role">
              <MenuItem value={ROLE.ADMIN}>Admin</MenuItem>
              <MenuItem value={ROLE.LEAD}>Lead</MenuItem>
              <MenuItem value={ROLE.GUEST}>Guest</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
