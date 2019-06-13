import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './Component.css';

export default class extends React.PureComponent {

  static propTypes = {
    onClickCloseSearch: PropTypes.func.isRequired
  }

  render() {
    return(
      <div style={{ flex: '1 1 auto' }}>
        <form className={styles.searchForm} onSubmit={e => e.preventDefault()}>
          <div className={styles.inputContainer}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </div>
          
          <button type="submit" area-label="submit">
            <i className="zmdi zmdi-search" />
          </button>

          <button type="button" area-label="close" onClick={this.props.onClickCloseSearch}>
            <i className="zmdi zmdi-close" />
          </button>
        </form>
      </div>
    )
  }
}