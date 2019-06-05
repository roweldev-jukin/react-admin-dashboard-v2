import React, { PureComponent, Fragment } from 'react';

import LoggedUser from './Components/LoggedUser';
import Navigation from './Components/Navigation';

export default class extends PureComponent {

  render () {
    return(
      <Fragment>
        <aside id="sidebarContainer">
          <LoggedUser />
          <Navigation />
        </aside>
      </Fragment>
    )
  }
}