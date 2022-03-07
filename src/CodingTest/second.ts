// 스택을 활용하여 해보자
// 0 만날때까지 스택에다가 넣고 스택의 길이가 이랑 같으면 answer += 1
function solution(h: number, w: number, n: number, board: string[]) {
  let answer = 0;
  const numberBoard = Array.from({ length: h }, (_, i) => {
    return Array.from({ length: w }, (_, j) => {
      return Number(board[i][j]);
    });
  });


  let stack: number[] = [];
  // 가로로 n 목
  for (let i = 0; i < numberBoard.length; i++) {
    for (let j = 0; j < numberBoard[i].length; j++) {
      if (numberBoard[i][j] === 1) {
        stack.push(1);
      } else {
        if (stack.length === n) {
          answer += 1;
        }
        stack = [];
      }
    }
    if (stack.length === n) {
      answer += 1;
    }
    stack = [];
  }

  stack = [];
  // 세로로 n 목
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (numberBoard[j][i] === 1) {
        stack.push(1);
      } else {
        if (stack.length === n) {
          answer += 1;
        }
        stack = [];
      }
    }
    if (stack.length === n) {
      answer += 1;
    }
    stack = [];
  }
  stack = [];
  // 대각선 아래로 n 목
  for (let i = h - 1; i >= 0; i--) {
    let j = 0;
    while (i + j < h && j < w) {
      if (numberBoard[i + j][j] === 1) {
        stack.push(1);
      } else {
        if (stack.length === n) {
          answer += 1;
        }
        stack = [];
      }
      j++;
    }
    if (stack.length === n) {
      answer += 1;
    }
    stack = [];
  }
  stack = [];

  for (let i = 1; i < w; i++) {
    let j = 0;
    while (i + j < w && j < h - 1) {
      if (numberBoard[j][i + j] === 1) {
        stack.push(1);
      } else {
        if (stack.length === n) {
          answer += 1;
        }
        stack = [];
      }
      j++;
    }
    if (stack.length === n) {
      answer += 1;
    }
    stack = [];
  }
  stack = [];

  // 대각선 위로 n 목
  for (let i = 0; i < h; i++) {
    let j = 0;
    while (i - j >= 0 && j < w) {
      if (numberBoard[i - j][j] === 1) {
        stack.push(1);
      } else {
        if (stack.length === n) {
          answer += 1;
        }
        stack = [];
      }
      j++;
    }
    if (stack.length === n) {
      answer += 1;
    }
    stack = [];
  }
  stack = [];

  for (let i = 1; i < w; i++) {
    let j = h - 1;
    while (j > -1 && h - j + i - 1 < w) {
      if (numberBoard[j][h - j + i - 1] === 1) {
        stack.push(1);
      } else {
        if (stack.length === n) {
          answer += 1;
        }
        stack = [];
      }
      j--;
    }
    if (stack.length === n) {
      answer += 1;
    }
    stack = [];
  }

  return answer;
}

export default solution;