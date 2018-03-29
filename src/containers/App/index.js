import React from 'react';
import { hot } from 'react-hot-loader'
import styles from './style.css';
import Header from '../../components/Header';
import Editor from '../Editor';

class App extends React.Component {
  render () {

    return (
      <div className={styles.this}>
        <Header />
        <Editor />
      </div>
    )
  }
}

export default hot(module)(App)
