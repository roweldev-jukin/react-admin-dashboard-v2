import * as React from 'react';
import classnames from 'classnames';

import Hamburger from './Components/Hamburger';
import Search from './Components/Search';
import TopNavigation from './Components/TopNavigation';

import styles from './Component.css';

export default class extends React.PureComponent {

  render () {
    return (
      <header className="header">

        <div className={classnames(styles.wrapper, styles.branding)}>
          <Hamburger />
          <a className="navbar-brand d-none d-md-block">Template</a>
        </div>

        <div className={classnames(styles.wrapper, styles.searchForm, 'd-lg-block d-none search-container')}>
          <Search />
        </div>

        <div className={classnames(styles.wrapper, styles.headerNav)}>
          <TopNavigation />
        </div>
        
      </header>
    )
  }
}