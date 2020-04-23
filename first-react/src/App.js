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
    //console.log("Was clicked!")
    //DONT DO THIS
    //this.state.persons[0].name = "Muammer";
    this.setState({
      persons: [
        {name: "Muammer", age: 26},
        {name: newName, age: 28},
        {name: "Furkan", age: 26},
        {name: "Betül", age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <h2>It works!</h2>
        <button onClick={this.switchNameHandler.bind(this, "Esma Beyza")}>Switch Name</button>
        <p>Our team members are: </p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Esma")}/>
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
