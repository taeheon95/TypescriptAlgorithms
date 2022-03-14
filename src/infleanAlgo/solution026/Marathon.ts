function marathon(N: number, arr: number[]) {
  const ans = Array.from({ length: N }, (_, i) => i + 1);
  for (let i = 1; i < N; i++) {
    let cnt = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        cnt++;
      }
    }
    ans[i] -= cnt;
  }
  return ans;
}

export default marathon;