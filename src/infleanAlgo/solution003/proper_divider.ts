function proper_divider(N: number): string {
  let sum = 1;
  let ans: string = '1';
  for (let i = 2; i < N; i++) {
    if (N % i === 0) {
      ans += ` + ${i}`;
      sum += i;
    }
  }
  ans += ' = ' + sum;
  return ans;
}

export default proper_divider;