import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Routes from './routes';
import defaultReducer from './Config/reducers';
import { configureStore, history } from './Utilities/configureStore';

import Sidebar from './Core/Common/Sidebar'
import Header from './Core/Common/Header';

import './styles/app.scss';

const store = configureStore(defaultReducer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Header />
        <Sidebar />
        <div className="overlay" />
        <main className="container">
          <Routes />
        </main>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
