import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Johnny!'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        change={this.usernameChangeHandler}
          name={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Jimmy"/>
        <UserOutput userName="Jimmy"/>
      </div>
    )
  }
}

export default App;