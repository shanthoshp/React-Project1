import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput/userInput'
import UserOutput from './User/UserOutput/userOutput'

class App extends Component {

    state = {
        username: 'shanthoshp'
    };

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    };

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput input={this.usernameHandler}
                   username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
