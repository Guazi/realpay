import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../logo.svg';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
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
        <div class="app-button">
          <Button onClick={this.startBillPay} variant="contained" color="primary">
      Pay My Bill
          </Button>
        </div>
        <div class="app-button">
          <Button onClick={this.startAdminLogin} variant="contained" color="primary">
          Admin Login
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
