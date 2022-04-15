function musicVideo(N: number, M: number, musicTimes: number[]) {
  let ans = 0, start = 0, end = 0;
  const maxTime = musicTimes.reduce((acc, cur) => acc + cur);
  const minTime = 0;
  start = minTime, end = maxTime;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let sum = 0;
    let tempM = 0;
    for (let i = 0; i < musicTimes.length; i++) {
      sum += musicTimes[i];
      if (sum > mid) {
        tempM++;
        sum = musicTimes[i];
      } else if (sum === mid) {
        tempM++;
        sum = 0;
      }
    }
    sum > 0 && tempM++;
    if (tempM <= M) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}

export default musicVideo;