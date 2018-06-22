import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import withTracker from './withTracker';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={withTracker(Home, { /* additional attributes */ })} />
      </Switch>
    );
  }
}

export default App;
