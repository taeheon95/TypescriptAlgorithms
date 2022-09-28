function numIslands(grid: string[][]): number {
  let cnt = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        cnt++;
        dfs(grid, i, j);
      }
    }
  }
  return cnt;
}

function dfs(grid: string[][], x: number, y: number) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length) {
    return;
  }
  if (grid[x][y] === '1') {
    grid[x][y] = '0';
    dfs(grid, x + 1, y);
    dfs(grid, x - 1, y);
    dfs(grid, x, y + 1);
    dfs(grid, x, y - 1);
  }
}

export { numIslands };