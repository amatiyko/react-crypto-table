import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from './Store';
import { CoinTable } from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <CoinTable />
      </Provider>
    );
  }
}

export default App;
