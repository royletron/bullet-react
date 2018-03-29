import React from 'react';

import styles from './style.css';

export default class PageBlock extends React.Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.this}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
