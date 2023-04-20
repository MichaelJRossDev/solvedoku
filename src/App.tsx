import React, { useEffect, useState } from 'react';
import './App.css';
import SudokuBoard from './components/SudokuBoard';
import { solveSudoku } from './solver';
import { motion } from 'framer-motion';

const App = () => {
  const [theme, setTheme] = useState('nord');
  const [errorClass, setErrorClass] = useState('hidden');
  const [sudokuArray, setSudokuArray] = useState(new Array(9).fill(new Array(9).fill(0)));

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  useEffect(() => {
    setErrorClass('hidden');
  }, [sudokuArray])

  const solveHandler = () => {
    const solved = solveSudoku(JSON.parse(JSON.stringify(sudokuArray)));
    if (solved) {
      setSudokuArray(solved)
    } else {
      setErrorClass('');
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
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='SolveButton' onClick={solveHandler}>Solve</motion.button>
              </td>
              <td>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='ClearButton' onClick={() => setSudokuArray(new Array(9).fill(new Array(9).fill(0)))}>Clear</motion.button>
              </td>
            </tr>
          </tbody>
        </table>
        <motion.select whileHover={{scale: 1.1}}  defaultValue={"nord"} onChange={(e) => themeChangeHandler(e)}>
          <option value={"catppuccin"}>Catppuccin</option>
          <option value={"gruvbox"}>Gruvbox</option>
          <option value={"nord"}>Nord</option>
          <option value={"one"}>Atom One</option>
          <option value={"dracula"}>Dracula</option>
          <option value={"solarized-dark"}>Solarized Dark</option>
          <option value={"solarized-light"}>Solarized Light</option>
          <option value={"monokai"}>Monokai</option>
          <option value={"barbie"}>Barbie</option>
          <option value={"zenburn"}>Zenburn</option>
          <option value={"matrix"}>Matrix</option>
          <option value={"autumn"}>Autumn</option>
          <option value={"spicy"}>🌶️</option>
        </motion.select>
        <br/>
        <label className={errorClass}>Unsolveable</label>
    </div>
  );
}



export default App;
