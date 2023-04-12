import React, { useState } from 'react';
import SudokuCell from './SudokuCell';

const SudokuBoard = () => {
  return (
    <div>
      <table>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {
                  [0, 1, 2, 3, 4, 5, 6, 7, 8].map((column, columnIndex) => {
                    return (<td key={columnIndex}><SudokuCell/></td>)
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