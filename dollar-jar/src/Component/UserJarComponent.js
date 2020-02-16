import React, { Component } from 'react'

export default class UserJarComponent extends Component {

    constructor(props){
        super(props)
        console.log(this.props);
        this.state = {
            userData : {
                uid : this.props.id,
                name : this.props.userName,
                balance : this.props.balance
            },
            panalty: 10,
            total: 0
        }
    }

    addPoints(item){
        console.log("Point Added");
        this.setState({
            userData:{
                name : this.state.userData.name,
                balance: item + this.state.panalty,
            },
            total: this.state.total +  this.state.panalty
        })
        
        // item.balance += this.state.panalty; 
    }

    removePoints(item){
        this.setState({
            userData:{
                name : this.state.userData.name,
                balance: item - this.state.panalty,
            },
            total: this.state.total -  this.state.panalty
        })
    }


    render() {
        console.log(this.props);
        // const userEntries = this.props.entries;
        // const userJar = userEntries.map(this.createJar);
        return (
            <div>
                {/* <h2> User Jar Component </h2> */}
                <p>Total = {this.state.total} </p>
                <ul>
                <li key={this.state.userData.uid}>{this.state.userData.name}</li> 
                <h3> Balance : {this.state.userData.balance} </h3>
                <button type="button" onClick={() => this.addPoints(this.state.userData.balance)}> + </button> &nbsp;&nbsp; <button type="button" onClick={() => this.removePoints(this.state.userData.balance)}> - </button>
                </ul>
            </div>
        )
    }
}
