function migration(n: number, times: number[]) {
  let ans = 0, start: number, end: number;
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  start = Math.floor(n / times.length);
  end = Math.floor(n / times.length);
  if (n % times.length !== 0) {
    start += 1;
    end += 1;
  }
  start *= minTime;
  end *= maxTime;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const sum = [0, ...times].reduce((acc, time) => {
      return acc + Math.floor(mid / time);
    });
    if (sum >= n) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}

export default migration;