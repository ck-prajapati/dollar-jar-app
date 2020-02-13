import React, { Component} from 'react';

export default class UserComponent extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            userList: []
        }
    }

    addUser = (e) =>{
        this.setState({

        })
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.uname}</h1>
                <hr></hr>
                <form>
                <input
                    type="text"
                    name="user"
                    placeholder="Enter User Name"
                    onSubmit = {this.addUser}
                />
                <button type="submit">add</button>
                </form>
            </div>
        )
    }
}