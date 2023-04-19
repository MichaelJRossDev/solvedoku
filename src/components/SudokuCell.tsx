import { log } from 'console';
import React, { useEffect, useState } from 'react';

const SudokuCell = (props: {row: number, column: number, sudokuArray: number[][],setSudokuArray: Function, solveHandler: Function}) => {
    const formattingClass = props.sudokuArray[props.row][props.column] === 0 ? 'zero' : 'nonzero';
    const onFocus = (e:React.FormEvent<HTMLInputElement>) => {
        (e.target as HTMLInputElement).select()
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter'){
            props.solveHandler();
        }
    }


    const onChange = (e: React.FormEvent<HTMLInputElement>, row: number, col: number) => {
        const value = (e.target as HTMLButtonElement).value;
        if (value.length <= 1) {
            const newArray = JSON.parse(JSON.stringify(props.sudokuArray));
            newArray[props.row][props.column] = value === '' || isNaN(Number(value)) ? 0 : Number(value);
            props.setSudokuArray(newArray)
        }        
    }
    return (
        <input onKeyDown={(e) => onKeyDown(e)} value={props.sudokuArray[props.row][props.column] !== 0 ? props.sudokuArray[props.row][props.column] : ''} onFocus={onFocus} className={'SudokuCell' + ' ' + formattingClass} onChange={(e) => onChange(e, props.row, props.column)}/>
    )
}

export default SudokuCell;