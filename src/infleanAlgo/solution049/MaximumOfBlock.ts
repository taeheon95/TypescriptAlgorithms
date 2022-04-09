function maximumOfBlock(N: number, front: number[], rightSide: number[]) {
  const block = Array.from({ length: N }, () => {
    return Array.from({ length: N }, () => 0);
  });
  front.forEach((b, idx) => {
    for (let i = 0; i < N; i++) {
      block[i][idx] = b;
    }
  });
  rightSide.forEach((b, idx) => {
    for (let i = 0; i < N; i++) {
      block[N - idx - 1][i] = Math.min(b, block[N - idx - 1][i]);
    }
  });

  const sum = block.map((arr) =>
    arr.reduce((acc, cur) => {
      return acc + cur;
    })).reduce((acc, cur) => {
    return acc + cur;
  });

  return sum;
}

export default maximumOfBlock;