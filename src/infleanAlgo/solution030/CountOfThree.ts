function countOfThree(N: string): number {
  let ans = 0;
  for (let i = 0; i < N.length; i++) {
    const cur = N.charCodeAt(i) - '0'.charCodeAt(0);
    let leftNum = Number(N.substring(0, i));
    let rightNum = Number(N.substring(i + 1));
    if (cur > 3) {
      ans += (leftNum + 1) * Math.pow(10, N.length - i - 1);
    } else if (cur === 3) {
      ans += leftNum * Math.pow(10, N.length - i - 1);
      if (i + 1 === N.length) {
        ans += 1;
      } else {
        ans += rightNum + 1;
      }
    } else {
      ans += leftNum * Math.pow(10, N.length - i - 1);
    }
  }
  return ans;
}

export default countOfThree;