import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <h2>It works!</h2>
        <p>Our team members are: </p>
        <Person name="Muammer" age="26"> Also, I'm the KING!</Person>
        <Person name="Esma" age="27"/>
        <Person name="Furkan" age="26"/>
        <Person name="Betül" age="27"/>
      </div>
    );

    //return React.createElement('div', {ClassName: 'App'}, React.createElement('h1', null, 'Hi, My name is React!'));
  }
}

export default App;
