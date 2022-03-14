function countOfZero(N: number): number {
  const dp: number[][] = Array.from({ length: N + 1 }, () => {
    return Array.from({ length: 2 }, () => 0);
  });

  for (let i = 1; i <= N; i++) {
    let temp = i;
    let countTwo = 0;
    let countFive = 0;
    while (temp % 2 === 0 || temp % 5 === 0 && temp !== 0) {
      if (temp % 2 === 0) {
        countTwo++;
        temp = Math.floor(temp / 2);
      }
      if (temp % 5 === 0) {
        countFive++;
        temp = Math.floor(temp / 5);
      }
    }
    dp[i][0] += dp[i - 1][0] + countTwo;
    dp[i][1] += dp[i - 1][1] + countFive;
  }

  return Math.min(...dp[N]);
}

export default countOfZero;