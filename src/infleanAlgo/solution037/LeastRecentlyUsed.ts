function leastRecentlyUsed(S: number, N: number, jobList: number[]) {
  const ans = Array.from({ length: S }, (_) => 0);
  const jobs = Array.from({ length: 100 }, (_) => false);
  let i = N - 1, j = 0;
  while (i >= 0 && j < S) {
    if (!jobs[jobList[i]]) {
      ans[j++] = jobList[i];
      jobs[jobList[i]] = true;
    }
    i--;
  }
  return ans;
}

export default leastRecentlyUsed;
