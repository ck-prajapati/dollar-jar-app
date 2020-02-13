import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserComponent from './UserComponent';
export default class Welcome extends Component{

state = {
    userName: "",
    redirect: false
}

handleSubmit = (e) => {
    const name = e.target.elements.uname.value;
    console.log(name)

    this.props.history.push('/add-user');

    this.setState({
        userName: name,
        redirect: true
    })
}

render() {
    return (
        <div>
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter Your Name" name="uname" />
                <br />
                <button type="submit">Submit</button>
                </form>
                <Route path="/add-user" component={UserComponent} />
            </div>
        </div>
    );
  }
}