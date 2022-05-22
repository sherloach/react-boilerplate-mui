import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// services
import authService from 'services/authService';

// actions
import { setUserData } from 'containers/Auth/Auth.actions';

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    function initAuth() {
      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user = authService.getUser();
        const parseUser = JSON.parse(user);
        dispatch(setUserData(parseUser.username, parseUser.roleUser));
      }
    }
    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;
