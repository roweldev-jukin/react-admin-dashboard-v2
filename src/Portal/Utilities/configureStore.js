import { assign } from 'lodash';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router';

import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { reducer as form } from 'redux-form';
import { reducer as token } from '../State/token';
import { reducer as user } from '../State/user';
import { reducer as status } from '../State/status';


export default (reducers = {}) => {

  const history = createBrowserHistory();

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
  };

  const middleware = applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware
  );

  const reducerMap = assign({}, {
    form,
    status,
    token,
    user,
    router: connectRouter(history),
    ...reducers
  }, reducers);

  const reducer = combineReducers(reducerMap);

  const reducerWithRouter = connectRouter(history)(reducer);

  const persistedReducer = persistReducer(persistConfig, reducerWithRouter);

  const createStoreWidthDevTools = composeWithDevTools(middleware)(createStore);

  const store = createStoreWidthDevTools(persistedReducer);
  
  const persistor = persistStore(store)

  return { history, store, persistor };
}
