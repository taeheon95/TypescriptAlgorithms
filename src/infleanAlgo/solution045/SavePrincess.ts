function savePrincess(N: number, K: number): number {
  const prince = Array.from({ length: N + 1 }, (_, i) => 0);

  let cur = 0, bp = 0, cnt = 0;
  while (true) {
    cur++;
    if (cur > N) {
      cur = 1;
    }
    if (prince[cur] === 0) {
      cnt++;
      if (cnt === K) {
        prince[cur] = 1;
        cnt = 0;
        bp++;
      }
    }
    if (bp === N - 1) break;
  }
  return prince.findIndex((p, i) => p !== 1 && i > 0);
}

export default savePrincess;