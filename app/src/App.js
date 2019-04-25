import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ListComponent} from "./Components/ListComponent";

function App() {
    // You can change the parameters of the algorithm that determines
    // duplicates here -- see the Algorithm docs for more
  let windowSize = 50
  let fieldAccThreshold = 0.9
  let overallAccThreshold = 0.45
  // let rowsToCompare = [[1,2], [4], [5,6,7,8,9,10],[11]]
  let rowsToCompare = [[1,2], [11]]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome!
        </p>
      </header>
        <ListComponent windowSize={windowSize} fieldAccThreshold={fieldAccThreshold}
        overallAccThreshold={overallAccThreshold} rowsToCompare={rowsToCompare}/>
    </div>
  );
}

export default App;
