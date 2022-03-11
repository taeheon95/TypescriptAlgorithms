function maxTemperature(N: number, K: number, days: number[]): number {
  let maxNum: number;
  let sum = 0;

  for (let i = 0; i < K; i++) {
    sum += days[i];
  }
  maxNum = sum;

  for (let i = 0; i < N - K; i++) {
    sum += days[i + K] - days[i];
    maxNum = Math.max(sum, maxNum);
  }

  return maxNum;
}

export default maxTemperature;