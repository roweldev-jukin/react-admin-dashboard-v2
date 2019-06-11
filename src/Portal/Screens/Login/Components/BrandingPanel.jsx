import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './BrandingPanel.css';

export default class extends React.PureComponent {

  static propTypes = {
    theme: PropTypes.object.isRequired
  }

  render () {
    const { theme } = this.props;

    return (
      <div
        className={styles.panel}
        style={{ backgroundColor: theme.brandingPanelColor}}
      >
        {(!!theme.brandingPanelLogo) && (
          <img src={theme.brandingPanelLogo} style={styles.logo} />
        )}
      </div>
    )
  }
}
