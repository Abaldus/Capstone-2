import React, { Component } from 'react';
import Home from './homepage';
import Menu from './menu';
import Heroes from './businessheroes';
import Dominos from './domonios';
import Oreo from './oreo';
import Coke from './coke';
import Education from './education';
import Cpr from './cpr';
import Jack from './jackdaniels';

import {
  Route,
  Switch, 
  BrowserRouter
} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/education" component={ Education } />
        <Route exact path="/cpr" component={ Cpr } />
        <Route exact path="/businessheroes" component={ Heroes } />
        <Route exact path="/businessheroes/dominos" component={ Dominos } />
        <Route exact path="/businessheroes/coke" component={ Coke } />
        <Route exact path="/businessheroes/oreo" component={ Oreo } />
        <Route exact path="/businessheroes/jackdaniels" component={ Jack } />
      </Switch>
      </div>
      </BrowserRouter>
  )};
}

export default App;
