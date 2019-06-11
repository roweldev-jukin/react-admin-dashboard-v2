import * as React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import createStore from './Utilities/configureStore';
import ConfigContext from './Contexts/ConfigContext';
import defaultConfig from './Config';
import Container from './Container'

export default class extends React.PureComponent {

  static propTypes = {
    config: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
  }

  render () {
    
    const config = merge({}, defaultConfig, this.props.config.default)

    const { store, persistor, history } = createStore(this.props.config.default);

    return (
      <ConfigContext.Provider value={config}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
              <Container>
                {this.props.children}
              </Container>
            </ConnectedRouter>
          </PersistGate>
        </Provider>
      </ConfigContext.Provider>
    )
  }
}