import { combineReducers } from 'redux';

// reducers
import app from 'App/App.reducer';
import auth from 'containers/Auth/Auth.reducer';

const reducers = combineReducers({
  app,
  auth,
});

export default reducers;
