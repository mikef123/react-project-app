import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: 'Miguel', age: 25},
      {name: 'Laura', age: 25},
      {name: 'Andres', age: 22}
    ],
    otherState: 'other state value'
  }

  
  switchNameHandler = (newName)=> {
  // console.log('Was clicked!');
  this.setState({
    persons : [
      {name: newName, age: 25},
      {name: 'Laura', age: 25},
      {name: 'Andres', age: 29}
    ]
  })
}
  nameChangeHandler = (event)=> {
  this.setState({
    persons : [
      {name: 'max', age: 25},
      {name: event.target.value, age: 25},
      {name: 'Lucas', age: 29}
    ]
  })
}

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a react App</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "max")}
          changed={this.nameChangeHandler}> I'm a child</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
