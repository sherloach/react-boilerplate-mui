/* eslint-disable default-param-last */
import { AuthActionTypes } from './Auth.types';

const initialState = {
  user: null,
  role: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        role: payload.role,
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        role: null,
      };
    case AuthActionTypes.SILENT_LOGIN:
      return {
        ...state,
        user: payload.user,
        role: payload.role,
      };
    default:
      return state;
  }
};

export default reducer;
