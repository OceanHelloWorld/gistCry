import React, { Component } from 'react';
import './users.css';
import axios from 'axios';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      // .then(data => {console.log('ajax: ', data);})
      .then(users => this.setState({users}, () => console.log('User fetched', users)))

    // axios.post("/api/register", {
    //   username: "MarkZ",
    //   password: "f4ceb00k"
    // })
    // .then(function (response) {
    //   console.log('axios post register from client: ', response);
    // })
    // .catch(function(error){
    //   console.log('error: ', error);
    // })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <ul>
          {this.state.users.map(user => 
            <li key = {user.id}> {user.username} {user.password}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Users;
