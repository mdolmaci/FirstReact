import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from "radium"
import styled from "styled-components";
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      {id: "0001", name: "Muammer", age: 26},
      {id: "0002", name: "Esma", age: 27},
      {id: "0003", name: "Furkan", age: 26},
      {id: "0004", name: "Betül", age: 27}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // [red]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // [red, bold]
    }


    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <h2 className={classes.join(" ")}>It works!</h2>
        <StyledButton
          style={style}
          onClick={this.togglePersonsHandler}>Show Persons</StyledButton>
        <p>Our team members are: </p>
        {persons}
      </div>
    );

    return React.createElement('div', {ClassName: 'App'}, React.createElement('h1', null, 'Hi, My name is React!'));
  }
}

export default App;
