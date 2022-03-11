function furyCauser(N: number, heights: number[]): number {
  let ans: number = 0;

  for (let i = 0; i < N - 1; i++) {
    let flag = true;
    for (let j = i + 1; j < N; j++) {
      if (heights[j] >= heights[i]) {
        flag = false;
        break;
      }
    }
    flag && ans++;
  }

  return ans;
}

export default furyCauser;