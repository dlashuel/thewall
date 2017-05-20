import React, { Component } from 'react'



class UserItem extends Component{
    render(){
        return (
            <div>
                <h1 key={this.props.key}>Username: {this.props.userName} CreatedAt: {this.props.createdAt}</h1>
            </div>
        )
    }
}

export default UserItem
