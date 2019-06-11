import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Routes from '../routes';
import Sidebar from '@/Core/Common/Sidebar'
import Header from '@/Core/Common/Header';

export default class extends PureComponent {
  
  static propTypes = {
    componentDidMount: PropTypes.func.isRequired
  }

  componentDidMount = () => this.props.componentDidMount();

  render() {    
    return (
      <React.Fragment>

        <Header />

        <Sidebar />

        <div className="overlay" />

        <main className="container">
          <Routes />
        </main>

      </React.Fragment>
    );
    
  }
}