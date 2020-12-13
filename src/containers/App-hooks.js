import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Miguel', age: 25 },
      { name: 'Laura', age: 25 },
      { name: 'Andres', age: 29 }
    ],
    otherState: 'some other value'
  });

  console.log(personsState);
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: 'Miguel Fernando', age: 25 },
        { name: 'Laura', age: 25 },
        { name: 'Andres', age: 29 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> I'm a child</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}


export default app;
