import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import TextPage from './TextPage';

import './resources/css/common.css'

class Routers extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount(){
  }

  render() {
    return (
      <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/text-page" component={TextPage}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default Routers;
