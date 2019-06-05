import * as React from 'react';
import PropTypes from 'prop-types';

export default class extends React.PureComponent {

  static propTypes = {
    onClickHamburger: PropTypes.func.isRequired
  }

  render () {
    return(
      <React.Fragment>
        <button className="navbar-toggle collapsed hamburger--spring" type="button" onClick={this.props.onClickHamburger}>
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </button>
      </React.Fragment>
    )
  }
}