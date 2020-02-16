import React, { Component} from 'react';
import '../App.css';
import {Link} from "react-router-dom";

export default class Welcome extends Component{

    constructor(){
        super();
        this.state = {
            userName: ""
        }
    }

changeInput = (e) =>{
    const name = e.target.value;
    this.setState({
        userName : name,
    });
}

render() {
    console.log(this.state.userName);
    return (
            <div className="App" >

                <input type="text" value={this.state.userName} onChange={this.changeInput} name="uname"/>
                <br />
                <Link to = {{pathname: '/add-user', userName: this.state.userName}}> 
                    <button>Submit</button>
                </Link>
            </div>
    );
  }
}