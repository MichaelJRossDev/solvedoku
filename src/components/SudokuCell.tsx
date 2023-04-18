import React, { useEffect, useState } from 'react';

const SudokuCell = (props: {row: number, column: number, sudokuArray: number[][],setSudokuArray: Function}) => {
    const onChange = (e: React.FormEvent<HTMLInputElement>, row: number, col: number) => {
        const value = Number((e.target as HTMLButtonElement).value);
        if (false) {
            console.log('Add validation for sudoku cells!');
        } else {
            const newArray = JSON.parse(JSON.stringify(props.sudokuArray));
            newArray[props.row][props.column] = value;
            props.setSudokuArray(newArray)
        }
        
    }
    return (
        <input value={props.sudokuArray[props.row][props.column]} className='SudokuCell' onChange={(e) => onChange(e, props.row, props.column)}/>
    )
}

export default SudokuCell;