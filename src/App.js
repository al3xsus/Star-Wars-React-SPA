import React, { Component } from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from './containers/Home'
import UniCon from './containers/UniCon'
import FormHeader from './components/FormHeader'
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <FormHeader/>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/films" component={UniCon}/>
              <Route path="/people" component={UniCon}/>
              <Route path="/starships" component={UniCon}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
