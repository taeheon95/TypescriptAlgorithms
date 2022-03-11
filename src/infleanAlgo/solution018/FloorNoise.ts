function floorNoise(N: number, M: number, numList: number[]): number {
  const noise: number[] = Array.from({ length: N }, (_) => 0);
  if (numList[0] > M) {
    noise[0] = 1;
  }
  for (let i = 1; i < N; i++) {
    if (numList[i] > M) {
      noise[i] = noise[i - 1] + 1;
    }
  }
  return Math.max(...noise);
}

export default floorNoise;