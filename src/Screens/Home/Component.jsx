/* eslint-disable func-names, no-shadow */
import * as React from 'react';

import PropTypes from 'prop-types';

export default class extends React.PureComponent{

  static propTypes = {
    componentDidMount: PropTypes.func.isRequired
  }

  componentDidMount = () => this.props.componentDidMount();

  render() {
    
    return(
      <div>
        Default page
      </div>
    )
  }
}