import React, { Component } from 'react';

import Heroes from './components/Heroes/Heroes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Heroes />
      </div>
    );
  }
}

export default App;
