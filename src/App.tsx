import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SudokuBoard from './components/SudokuBoard';
import { solveSudoku } from './solver';
import { log } from 'console';

const App = () => {
  const [sudokuArray, setSudokuArray] = useState(new Array(9).fill(new Array(9).fill(0)));

  const solveHandler = () => {
    const solved = solveSudoku(JSON.parse(JSON.stringify(sudokuArray)));
    console.log(solved)
    if (solved) setSudokuArray(solved);
  }

  return (
    <div className="App">
      <body>
        <h1>Solvedoku.</h1>
        <SudokuBoard sudokuArray={sudokuArray} setSudokuArray={setSudokuArray}/>
        <table className='ButtonTable'>
          <tr>
            <td>
              <button className='SolveButton' onClick={solveHandler}>Solve</button>
            </td>
            <td>
              <button className='ClearButton' onClick={() => setSudokuArray(new Array(9).fill(new Array(9).fill(0)))}>Clear</button>
            </td>
          </tr>
        </table>
      </body>
    </div>
  );
}



export default App;
