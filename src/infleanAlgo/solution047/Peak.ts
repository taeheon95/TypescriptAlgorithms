function peak(N: number, numMap: number[][]): number {
  const peaksMap = Array.from({ length: N + 2 }, (_, i) => {
    return Array.from({ length: N + 2 }, (_, j) => {
      if (i === 0 || j === 0 || i - 1 === N || j - 1 === N) return 0;
      else return numMap[i - 1][j - 1];
    });
  });
  let cnt = 0;
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (
        peaksMap[i + 1][j] < peaksMap[i][j] &&
        peaksMap[i - 1][j] < peaksMap[i][j] &&
        peaksMap[i][j + 1] < peaksMap[i][j] &&
        peaksMap[i][j - 1] < peaksMap[i][j]
      ) {
        cnt++;
      }
    }
  }
  return cnt;
}

export default peak;