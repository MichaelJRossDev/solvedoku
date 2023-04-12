import React, { useState } from 'react';
import SudokuCell from './SudokuCell';

const initial = new Array(9).fill(new Array(9).fill(0));
console.log(initial);


const SudokuBoard = () => {
  const [sudokuArray, setSudokuArray] = useState(initial);
  return (
    <div className='SudokuBoard'>
      <table>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rowIndex) => {
            return (
              <tr key={rowIndex} className={rowIndex === 2 || rowIndex === 5 ? 'BorderedRow' : ''}>
                {
                  [0, 1, 2, 3, 4, 5, 6, 7, 8].map((column, columnIndex) => {
                    return (<td key={columnIndex} className={columnIndex === 2 || columnIndex === 5 ? 'BorderedColumn' : ''}><SudokuCell/></td>)
                  })
                }
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default SudokuBoard;