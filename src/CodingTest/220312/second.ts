const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function reverseClock(n: number, arr: number[][]) {
  for (let i = 1; i < n - 1; i++) {
    arr[i][0] = arr[i - 1][0] + 1;
    arr[n - 1][i] = arr[n - 1][i - 1] + 1;
  }
  for (let i = n - 2; i > 0; i--) {
    arr[0][i] = arr[0][i + 1] + 1;
    arr[i][n - 1] = arr[i + 1][n - 1] + 1;
  }
  for (let i = 1; i < n - 2; i++) {
    arr[i][1] = arr[i - 1][1] + 1;
    arr[n - 2][i] = arr[n - 2][i - 1] + 1;
  }
  for (let i = n - 2; i > 1; i--) {
    arr[i][n - 2] = arr[i + 1][n - 2] + 1;
    arr[1][i] = arr[1][i + 1] + 1;
  }
}

function second(n = 0, clockwise = false) {
  const ndp = Array.from({ length: n + 1 }, () => 0);
  ndp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      ndp[i] = ndp[i - 2] + Math.floor(i / 2 - 1) * 2 + 1;
    } else {
      ndp[i] = ndp[i - 2] + Math.floor(i / 2) * 2;
    }
  }
  const midNum = ndp[n];
  const breackTimes = Math.floor((n + 1) / 2);

  console.log(ndp);

  const arr = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  arr[0][0] = 1;
  arr[n - 1][0] = 1;
  arr[0][n - 1] = 1;
  arr[n - 1][n - 1] = 1;

  if (clockwise) {
  } else {
    reverseClock(n, arr);
  }

  console.log(arr);
}

export default second;