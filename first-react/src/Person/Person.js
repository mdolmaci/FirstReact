import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>Hi! I'm {props.name} and {props.age} years old!
      My favorite number is {Math.floor(Math.random()*12)}.</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
