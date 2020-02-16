import React, { Component} from 'react';
import UserJarComponent from './UserJarComponent'

export default class UserComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData:{
                uid : '',
                name : '',
                balance: 0
            },
            userList: []
        }
        this.createJar = this.createJar.bind(this);
    }

     handlerChngeInput = (e) =>{
        let user = e.target.value;
        let id = this.state.userList.length+1;
        console.log(this.state.userList.length+1)
        console.log(user);
        
        this.setState({
            userData:{
                uid : id,
                name : user,
                balance: 0
            }
        })
    } 

    handlerAddBtn = (e) =>{
        // let user = e.target.value;
        // let id = this.state.userList.length+1;
        
        let userData = this.state.userData;
        // this.state.userList.push(userData);
        this.setState({
            userList: [...this.state.userList,userData]
        })

        console.log(this.state.userList);

    }

    createJar(item) {
        return <UserJarComponent entries={item}/>
      }

    render() {
        const {userName} = this.props.location;
        // console.log(this.props.location);
        return (
            
            <div>
                <h1>Hello {userName}</h1>
                <hr></hr>
                <form>
                    <input
                        type="text"
                        name="user"
                        placeholder="Enter User Name"
                        value={this.state.userData.name}
                        onChange = {this.handlerChngeInput}
                    />
                    <button type="reset" onClick={this.handlerAddBtn}>add</button>

                    {
                        this.state.userList.map((user) => {
                            return <UserJarComponent userName={user.name} id={user.uid} balance={user.balance}  />
                        })
                    }

                </form>
            </div>
        )
    }
}