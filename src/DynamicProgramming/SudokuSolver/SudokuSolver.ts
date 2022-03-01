const isValid = (board: string[][], row: number, col: number, k: string) => {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 2);
    if (board[row][i] === k || board[i][col] === k || board[m][n] === k) {
      return false;
    }
  }
  return true;
};

const sudokuSolver = (data: string[][]) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] === '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, `${k}`)) {
            data[i][j] = `${k}`;
            if (sudokuSolver(data)) {
              return true;
            } else {
              data[i][j] = '.';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};



export default sudokuSolver;
