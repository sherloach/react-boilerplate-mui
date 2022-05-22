import { Redirect } from 'react-router-dom';

// configs
import { PATH } from 'configs';

// services
import authService from 'services/authService';

const AuthGuard = ({ children }) => {
  const isAuth = authService.getAccessToken();

  if (!isAuth) return <Redirect to={PATH.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;
