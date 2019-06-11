import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './FormPanel.css';

export default class extends React.PureComponent {

  static propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired
  }
  
  render() {
    
    const { theme, children } = this.props;

    return (
      <div className={styles.panel} style={{ backgroundColor: theme.formPanelColor}}>
        {children}
      </div>
    )

  }
}
