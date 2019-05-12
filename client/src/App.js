import React, { Component } from 'react';
import Users from './Components/Users/users'
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {    
    return (
      <div className="App">
        <Users/>
      </div>
    );
  }
}

export default App;
