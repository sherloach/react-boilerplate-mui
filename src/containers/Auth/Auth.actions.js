// services
import authService from 'services/authService';

// configs
import { PATH } from 'configs';

// types
import { AuthActionTypes } from './Auth.types';

export const login = (username, roleUser, history) => async (dispatch) => {
  dispatch({ type: AuthActionTypes.LOGIN_REQUEST });

  const { user, role } = await authService.loginWithAuth0(username, roleUser);
  dispatch({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: { user, role },
  });
  history.push(PATH.ROOT);
};

export const logout = () => (dispatch) => {
  authService.logOut();
  dispatch({ type: AuthActionTypes.LOGOUT });
};

export const setUserData = (user, role) => (dispatch) => {
  dispatch({
    type: AuthActionTypes.SILENT_LOGIN,
    payload: { user, role },
  });
};
