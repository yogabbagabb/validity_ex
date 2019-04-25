import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ListComponent} from "./Components/ListComponent";

function App() {
  let windowSize = 50
  let fieldAccThreshold = 0.6
  let overallAccThreshold = 0.25
  // let rowsToCompare = [[1,2], [4], [5,6,7,8,9,10],[11]]
  let rowsToCompare = [[1,2], [11]]

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
        <ListComponent windowSize={windowSize} fieldAccThreshold={fieldAccThreshold}
        overallAccThreshold={overallAccThreshold} rowsToCompare={rowsToCompare}/>
    </div>
  );
}

export default App;
