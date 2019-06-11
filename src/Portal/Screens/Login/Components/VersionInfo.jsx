import * as React from 'react';
import styles from './VersionInfo.css';

export default () => {

  let info;

  if (window.env.RELEASE) {
    info = `Release: ${window.env.RELEASE}`;
  } else if (window.env.BUILD) {
    info = `Build: ${window.env.BUILD}`;
  } else {
    info = `Local Development`;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.tag}>
        {info}
      </div>
    </div>
  )
}

