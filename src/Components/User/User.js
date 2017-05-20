import React, { Component } from 'react';
import Axios from 'axios';
import UserItem from "./UserItem.js"




class UserList extends Component{
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {users: [], message:''}
        console.log(this.state)
    }

  componentDidMount(){
        Axios.get("http://54.245.42.196/users" ,
         {cancelToken: this.cancelToken.token})
            .then((result) => {
                this.setState({
                    users: result.data
              })
         }).catch((err)=>{
            if(Axios.isCancel(err)){
                console.log(err.message);
                return;
            }
            console.log(err);
     })
  }
   render () {
       var users = this.state.users.map((user) => {
           return(
               <div key={user._id}>
                    <UserItem userName={user.username} createdAt={new Date(user.createdAt).toLocaleDateString()} />
                </div>
           )
       })
       console.log(this.state)
        return (
            <div>
                <h2>User Table</h2>
                <ul>
                    {users}
                </ul>
            </div>

        )
    }
}


export default UserList;
