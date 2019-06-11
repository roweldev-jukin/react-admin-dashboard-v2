import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './Wrapper.css';

export default class extends React.PureComponent {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    )
  }
}