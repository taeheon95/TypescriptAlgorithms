function countOfThree(N: number): number {
  let ans = 0;
  const arr = Array.from({ length: N }, (_, i) => i + 1);
  arr.forEach((value) => {
    let temp = value;
    while (temp > 0) {
      if (temp % 10 === 3) ans++;
      temp = Math.floor(temp / 10);
    }
  });
  return ans;
}

export default countOfThree;