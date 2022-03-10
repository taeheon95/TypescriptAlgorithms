function count_of_nums(N: number): number {
  let ans: number = 0;
  if (N < 10) {
    ans = N;
  } else {
    const strN = String(N);
    const subNums = Number(strN.substring(1));
    const newStrN = String(N - subNums - 1);
    ans += (subNums + 1) * strN.length + get_nine_nums(newStrN);
  }
  return ans;
}

function get_nine_nums(strN: string): number {
  const numN = Number(strN);
  if (numN < 10) return numN;
  const count = strN.length * Number(strN[0]) * Math.pow(10, strN.length - 1);
  return count + get_nine_nums(strN.substring(1));
}

export default count_of_nums;