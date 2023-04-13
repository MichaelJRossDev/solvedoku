 export function solveSudoku(grid: number[][]): number[][] | null {
    // Find the next empty cell
    const [row, col] = findEmptyCell(grid);
    
    // If there are no more empty cells, the puzzle is solved
    if (row === -1) {
      return grid;
    }
    
    // Try all possible values for this cell
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(grid, row, col, num)) {
        grid[row][col] = num;
        const result = solveSudoku(grid);
        if (result !== null) {
          return result;
        }
        grid[row][col] = 0;
      }
    }
    
    // If no solution was found, return null
    return null;
  }
  
  function findEmptyCell(grid: number[][]): [number, number] {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return [-1, -1];
  }
  
  function isValidMove(grid: number[][], row: number, col: number, num: number): boolean {
    // Check the row and column for the same number
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) {
        return false;
      }
    }
    
    // Check the 3x3 box for the same number
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (grid[i][j] === num) {
          return false;
        }
      }
    }
    
    // If the number doesn't violate any rules, it's a valid move
    return true;
  }