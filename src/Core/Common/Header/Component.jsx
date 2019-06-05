import * as React from 'react';

import Hamburger from './Components/Hamburger';

export default class extends React.PureComponent {

  render () {
    return (
      <header className="header">
        <Hamburger />
        <a className="navbar-brand d-none d-md-block">GSHI iNC</a>
        
      </header>
    )
  }
}