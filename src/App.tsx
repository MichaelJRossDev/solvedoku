import React from 'react';
import logo from './logo.svg';
import './App.css';
import SudokuBoard from './components/SudokuBoard';

function App() {
  return (
    <div className="App">
      <h1>Solvedoku.</h1>
      <SudokuBoard/>
      <table className='ButtonTable'>
        <tr><td><button className='SolveButton'>Solve</button></td><td><button className='ClearButton'>Clear</button></td></tr>
      </table>
    </div>
  );
}

export default App;
