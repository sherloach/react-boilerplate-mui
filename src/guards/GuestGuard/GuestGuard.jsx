import { Redirect } from 'react-router-dom';

// configs
import { PATH } from 'configs';

// services
import authService from 'services/authService';

const GuestGuard = ({ children }) => {
  const isAuth = authService.getAccessToken();

  if (isAuth) return <Redirect to={PATH.ROOT} />;

  return <>{children}</>;
};

export default GuestGuard;
