function scoreOfThird(N: number, scores: number[]) {
  const scoreArr = Array.from({ length: 101 }, (_) => 0);
  scores.forEach((score) => {
    scoreArr[score]++;
  });
  let cnt = 0, i = 100;
  while (cnt < 3) {
    if (scoreArr[i--] > 0) {
      cnt++;
    }
  }
  return i + 1;
}

export default scoreOfThird;