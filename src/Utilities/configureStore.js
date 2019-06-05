/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

const history = createHashHistory();

const configureStore = (initialState) => {
  
  const reducerMap = {
    router: connectRouter(history),
    ...initialState
  }

  const rootReducer = combineReducers(reducerMap);

  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  middleware.push(thunkMiddleware);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
  
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, enhancer);

  return store;
};

export { configureStore, history };