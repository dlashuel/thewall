import React, { Component } from 'react'

import Axios from 'axios'


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {username:"", password:"", errors:""}
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  register = (e) => {
        e.preventDefault();
        Axios({
            method: "post",
            url: "http://54.245.42.196/users/create",
            data: { username: this.state.username, password: this.state.password }
        }).then((result) => {
            console.log(result);
            this.setState({errors: "", username: "", password: ""})
        }).catch((err) => {
            console.log(err);
            this.setState({errors: err.response.data.errors})
        })
    }
  render(){
    return(
          <div>
            <div className="container">
                  <h2>The Wall Example</h2>
                  <hr/>
                  <form>
                        <h1>Welcome, DV USER</h1>
                        <label>Username</label>
                        <input
                          type="text" className="form-control"
                          name="username" onChange={this.handleChange}
                          value={this.state.username}
                        />
                        <label>Password</label>
                        <input
                          type="password" className="form-control"
                          name="password" onChange={this.state.password}
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                        <input type="submit" className="btn btn-primary" />
                  </form>
            </div>
          </div>
        )
  }
}

export default Dashboard;
