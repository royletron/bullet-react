import React from 'react';

import styles from './style.css';

export default class Item extends React.Component {
  render () {
    return (
      <div className={styles.this}>Item</div>
    )
  }
}
