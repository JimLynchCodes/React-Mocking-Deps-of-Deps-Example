import React from 'react';
import logo from './logo.svg';
import './App.css';

import FunctionalAppService from './functional-services/FunctionalAppService'
import ClassAppService from './class-services/ClassAppService'
import ClassDepService from './class-services/ClassDepService'

function App() {

  // console.log('app , functionalAppService())
  FunctionalAppService.callDep()
 
  const classAppService = new ClassAppService()
  classAppService.callDep()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
