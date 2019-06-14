/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import * as React from 'react';
import PropTypes from 'prop-types';

import LoggedUser from './Components/LoggedUser';
import Navigation from './Components/Navigation';

export default class extends React.PureComponent {

  static propTypes = {
    onHoverAside: PropTypes.func.isRequired
  }

  render () {
    return(
      <React.Fragment>
        <aside
          id="sidebarContainer"
          onMouseOver={this.props.onHoverAside}
          onMouseOut={this.props.onHoverAside}
        >
          <LoggedUser />
          <Navigation />
        </aside>
      </React.Fragment>
    )
  }
}