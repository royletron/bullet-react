import React from 'react';

import Menu from '../../components/Menu';
import PageBlock from '../../components/PageBlock';

import styles from './style.css';

export default class Editor extends React.Component {
  render () {
    return (
      <div className={styles.this}>
        <PageBlock><div>Hello World</div></PageBlock>
      </div>
    )
  }
}
