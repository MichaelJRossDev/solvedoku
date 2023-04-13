import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SudokuBoard from './components/SudokuBoard';
import { solveSudoku } from './solver';

const initial = new Array(9).fill(new Array(9).fill(0));



const App = () => {
  const [sudokuArray, setSudokuArray] = useState(initial);

  const solveHandler = () => {
    // console.log(solveSudoku(sudokuArray))
  }



  return (
    <div className="App">
      <body>
        <h1>Solvedoku.</h1>
        <SudokuBoard sudokuArray={sudokuArray} setSudokuArray={setSudokuArray}/>
        <table className='ButtonTable'>
          <tr><td><button className='SolveButton' onClick={solveHandler}>Solve</button></td><td><button className='ClearButton'>Clear</button></td></tr>
        </table>
      </body>
    </div>
  );
}



export default App;
