function inversionSequence(N: number, sequence: number[]): number[] {
  const ans: number[] = Array.from({ length: N }, () => Number.MAX_SAFE_INTEGER);

  sequence.forEach((cnt, idx, arr) => {
    let tempCnt = 0, j = 0;
    while (tempCnt <= cnt) {
      if (ans[j] === Number.MAX_SAFE_INTEGER) {
        tempCnt++;
      }
      if (tempCnt > cnt) {
        break;
      }
      j++;
    }
    ans[j] = idx + 1;
  });

  return ans;
}

export default inversionSequence;