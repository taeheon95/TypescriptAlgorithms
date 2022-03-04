function minimumCostPath(matrix: number[][]): number {

  const n = matrix.length;
  const m = matrix[0].length;

  const dp: number[][] = Array.from({ length: n }, () => {
    return Array.from({ length: m }, () => {
      return 0;
    });
  });

  // base conditions
  dp[0][0] = matrix[0][0]; // to reach cell (0, 0) from (0, 0) is of no moves
  // preprocessing the first row
  for (let i: number = 1; i < matrix[0].length; i++) {
    dp[0][i] = matrix[0][i - 1] + matrix[0][i];
  }
  // preprocessing the first column
  for (let i: number = 1; i < matrix.length; i++) {
    dp[i][0] = matrix[i - 1][0] + matrix[i][0];
  }

  // updating the path cost for current position
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
    }
  }

  return dp[n - 1][m - 1];
}

export default minimumCostPath;