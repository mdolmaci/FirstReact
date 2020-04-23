import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>Hi! I'm {props.name} and {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
