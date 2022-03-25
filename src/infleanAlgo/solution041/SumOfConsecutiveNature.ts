function sumOfConsecutiveNature(N: number) {
  let start = N - 2, end = N - 2;
  let arr = Array.from({ length: N - 1 }, (_, i) => i + 1);
  let sum = 0;
  let answer: number[][] = [];
  while (end >= 0) {
    if (sum >= N) {
      sum -= arr[start--];
    } else {
      sum += arr[end--];
    }
    if (sum === N) {
      const sumRange = Array.from({ length: start - end }, (_, i) => arr[end + i + 1]);
      answer.push(sumRange);
    }
  }
  return answer;
}

export default sumOfConsecutiveNature;