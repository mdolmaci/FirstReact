import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>It works!</p>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );

    //return React.createElement('div', {ClassName: 'App'}, React.createElement('h1', null, 'Hi, My name is React!'));
  }
}

export default App;
