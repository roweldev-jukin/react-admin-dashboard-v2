import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class extends PureComponent {
  
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        {children}
      </div>
    );
  }
}