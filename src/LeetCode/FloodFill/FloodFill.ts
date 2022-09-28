function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {

  const start = image[sr][sc];

  const fill = (start: number, arr: number[][], x: number, y: number, color: number) => {
    if (x === arr.length || y === arr[0].length || x < 0 || y < 0) {
      return arr;
    }
    if (arr[x][y] === start && arr[x][y] !== color) {
      arr[x][y] = color;
      arr = fill(start, arr, x + 1, y, color);
      arr = fill(start, arr, x - 1, y, color);
      arr = fill(start, arr, x, y + 1, color);
      arr = fill(start, arr, x, y - 1, color);
    }
    return arr;
  };
  return fill(start, image, sr, sc, color);
}