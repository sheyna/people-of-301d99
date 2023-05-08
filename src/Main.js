import React from 'react';
import Person from './Person';


// Props is an object that gets passed to each component
// ex. let props = {name: ___}
class Main extends React.Component {

  render() {
    return (
      <main>
      <Person name='Sheyna' hometown='Seattle' hairColor='Brown'/>
      <Person name='Ashley'/>
      <Person name='Dan'/>
      <Person name='Arthur'/>
      <Person name='Andrew'/>
      <Person name='Tiffani'/>
      <Person name='Jared'/>
      <Person name='Anthony'/>
      </main>
    );
  }
}

export default Main;
