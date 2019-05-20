import React, { Component } from 'react';
import './users.css';
import axios from 'axios';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      login: false,
      newUsername: '',
      newPassword: ''
    }
  }

  login() {
    axios.post("/api/login", {
      username: "MarkZ",
      password: "f4ceb00k"
    })
    .then((response) => {
      if (response.data) {
        this.setState({
          username: response.data[0].username,
          login: true
        })
      } else {
        console.log('username or password is incorrect. Please login again');
      }
    })
    .catch(function(error){
      console.log('error: ', error);
    })
  }

  register() {
    axios.post("/api/register", {
      username: this.state.newUsername,
      password: this.state.newPassword
    })
    .then((response) => {
      console.log('axios post register from client: ', response);
    })
    .catch((error) => {
      console.log('error: ', error);
    })
  }

  getAllGist() {
    axios.post("/api/gists", {
      username: this.state.username,
    })
    .then((response) => {
      console.log('axios post register from client: ', response);
    })
    .catch((error) => {
      console.log('error: ', error);
    })
  }

  componentDidMount() {
    // fetch('/api/users')
    //   .then(res => res.json())
    //   // .then(data => {console.log('ajax: ', data);})
    //   .then(users => this.setState({users}, () => console.log('User fetched', users)))

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
    this.login();
    
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        {this.state.username}        
      </div>
    )
  }
}

export default Users;
