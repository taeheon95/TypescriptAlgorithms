function jollyJumpers(N: number, nums: number[]): string {
  const jollyArray = Array.from({ length: N }, () => false);
  jollyArray[0] = true;
  for (let i = 1; i < N; i++) {
    const num = Math.abs(nums[i] - nums[i - 1]);
    if (num < N) {
      jollyArray[num] = true;
    }
  }

  return jollyArray.includes(false) ? 'NO' : 'YES';
}

export default jollyJumpers;