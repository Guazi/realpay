import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avery Team, LLC</h1>
          <h2> Real Estate Company</h2>
        </header>
        <p className="App-intro">
          Welcome to Avery Team, LLC. Your full service real estate partner
        </p>
        <div> Pay My Bill </div>
      </div>
    );
  }
}

export default App;
