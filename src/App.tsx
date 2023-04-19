import React, { useEffect, useState } from 'react';
import './App.css';
import SudokuBoard from './components/SudokuBoard';
import { solveSudoku } from './solver';

const App = () => {
  const [theme, setTheme] = useState('nord');
  const [sudokuArray, setSudokuArray] = useState(new Array(9).fill(new Array(9).fill(0)));

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  const solveHandler = () => {
    const solved = solveSudoku(JSON.parse(JSON.stringify(sudokuArray)));
    if (solved) {
      setSudokuArray(solved)
    } else {
      console.log('Not solveable');
    }
  }

  const themeChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setTheme((e.target as HTMLButtonElement).value)  
  }

  return (
    <div className={`App ${theme}`}>
        <h1>Solvedoku.</h1>
        <SudokuBoard sudokuArray={sudokuArray} setSudokuArray={setSudokuArray} solveHandler={solveHandler}/>
        <table className='ButtonTable'>
          <tbody>
            <tr>
              <td>
                <button className='SolveButton' onClick={solveHandler}>Solve</button>
              </td>
              <td>
                <button className='ClearButton' onClick={() => setSudokuArray(new Array(9).fill(new Array(9).fill(0)))}>Clear</button>
              </td>
            </tr>
          </tbody>
        </table>
        <select defaultValue={"nord"} onChange={(e) => themeChangeHandler(e)}>
          <option value={"catppuccin"}>Catppuccin</option>
          <option value={"gruvbox"}>Gruvbox</option>
          <option value={"nord"}>Nord</option>
          <option value={"one"}>Atom One</option>
          <option value={"dracula"}>Dracula</option>
          <option value={"solarized-dark"}>Solarized Dark</option>
          <option value={"solarized-light"}>Solarized Light</option>
          <option value={"monokai"}>Monokai</option>
          <option value={"barbie"}>Barbie</option>
        </select>
      
    </div>
  );
}



export default App;
