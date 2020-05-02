import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Muammer", age: 26},
      {name: "Esma", age: 27},
      {name: "Furkan", age: 26},
      {name: "Betül", age: 27}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: "Muammer", age: 26},
        {name: newName, age: 28},
        {name: "Furkan", age: 26},
        {name: "Betül", age: 27}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Muammer", age: 26},
        {name: event.target.value, age: 27},
        {name: "Furkan", age: 26},
        {name: "Betül", age: 27}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <h2>It works!</h2>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Esma Beyza")}>Switch Name</button>
        <p>Our team members are: </p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Esma")}
          changed={this.nameChangeHandler}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}/>
      </div>
    );

    //return React.createElement('div', {ClassName: 'App'}, React.createElement('h1', null, 'Hi, My name is React!'));
  }
}

export default App;
