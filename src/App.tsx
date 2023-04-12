import React from 'react';
import logo from './logo.svg';
import './App.css';
import SudokuBoard from './components/SudokuBoard';

function App() {
  return (
    <div className="App">
      <h1>Solvedoku</h1>
      <SudokuBoard/>
    </div>
  );
}

export default App;
