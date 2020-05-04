import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch,} from "react-router-dom";

import Home from './containers/Home'
import UniCon from './containers/UniCon'
import FormHeader from './components/FormHeader'
import {Form404} from "./components/HelperForms";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
          <FormHeader/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/films" render={() => <UniCon key={'films'} entity={'films'}/>}/>
              <Route exact path="/people" render={() => <UniCon key={'people'} entity={'people'}/>}/>
              <Route exact path="/starships" render={() => <UniCon key={'starships'} entity={'starships'}/>}/>
              <Route component={Form404}/>
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
