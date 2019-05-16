import React, { Component } from 'react';
import './users.css';

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
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
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
