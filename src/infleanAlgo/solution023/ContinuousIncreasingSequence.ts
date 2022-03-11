function continuousIncreasingSequence(N: number, nums: number[]): number {
  const list = Array.from({ length: N }, (_) => 1);

  for (let i = 1; i < N; i++) {
    if (nums[i] >= nums[i - 1]) {
      list[i] += list[i - 1];
    }
  }

  return Math.max(...list);
}

export default continuousIncreasingSequence;