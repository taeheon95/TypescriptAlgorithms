function count_of_nums(N: number): number {
  const dp: number[] = Array.from({ length: N + 1 }, (_) => 0);
  for (let i = 1; i <= N; i++) {
    dp[i] = dp[i - 1] + String(i).length;
  }
  return dp[N];
}

export default count_of_nums;