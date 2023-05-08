// you don't need 'use strict';

// 3 things you need in every class component you create

// 1. import React
import React from 'react';
// import component files that I want to use in App
import Main from './Main.js';

// 2. declare the class
class App extends React.Component {
  

  render() {
    return (
      <>
        <header>
          <h1>Welcome to 301!</h1>
        </header>
       <Main/>
        <footer>
          &copy; 2023; Code Fellows
        </footer>
      </>
    );
    
  }
};

// 3. export the class
export default App;
