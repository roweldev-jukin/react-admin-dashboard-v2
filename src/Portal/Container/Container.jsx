import * as React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import StartupScreen from '../Screens/Startup';
import LoginScreen from '../Screens/Login';

export default class extends React.PureComponent {

  static propTypes = {
    isStarting: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,

    componentWillMount: PropTypes.func.isRequired,
  }

  componentWillMount = () => this.props.componentWillMount();
  
  render () {

    const { isStarting, children } = this.props;

    return(

      <div>
        
        {isStarting && <StartupScreen />}

        {!isStarting && (

          <React.Fragment>

            <Switch>

              { localStorage.getItem('auth') && (
                <Redirect exact from="/login" to="/" />
              )}
              <Route path="/login" component={LoginScreen} exact />
                
              <Route path="/" render={() => children} />
              
            </Switch>

          </React.Fragment>

        )}

      </div> 
    )
  }

}