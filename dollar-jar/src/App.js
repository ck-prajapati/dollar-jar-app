import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Welcome from './Component/Welcome';
import UserComponent from './Component/UserComponent';
 
export default class App extends Component{

render() {
    return (
          <Router>
            <Switch>
                <Route exact path = "/" component={Welcome}/>
                <Route path = "/add-user" component={UserComponent} />
            </Switch>
          </Router>  
        
    );
}
}