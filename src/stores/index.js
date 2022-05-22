import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

// rootReducers;
import rootReducers from './rootReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducers, enhancer);

export default store;
