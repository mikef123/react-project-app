import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    persons: [
      { id: 1, name: 'Miguel', age: 25 },
      { id: 2, name: 'Laura', age: 25 },
      { id: 3, name: 'Andres', age: 22 }
    ],
    otherState: 'other state value',
    showPersons: false
  }

  componentDidMount(){
  }

  shouldComponentUpdate(prevProps, prevState){
    return true;
  }

  componentDidUpdate(){

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


    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })

  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
