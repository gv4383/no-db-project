import React, { Component } from "react";

import Heroes from "./components/Heroes/Heroes";
import logo from "./logo.svg";
import "./reset.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Heroes Of Overwatch</h1>
        </header>
        <div className="container">
          <Heroes />
        </div>
      </div>
    );
  }
}

export default App;
