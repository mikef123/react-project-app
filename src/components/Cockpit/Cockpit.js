import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('useeffect'); 
    //equals to componentWillUnmount
    return () => {
      console.log('cleanup works in useEffect')
    }
    // http requestAnimationFrame...
  }, []) /* [] -> se subscribe solo la 1 vez, [variable] 
  -> cada vez que la variable cambie, sin 2 parámetro se subscribe siempre que se renderice la página*/

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
                    </button>
    </div>
  );

}

export default React.memo(cockpit);