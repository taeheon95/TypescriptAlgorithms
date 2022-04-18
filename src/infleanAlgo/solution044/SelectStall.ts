/**
 * @param num 거리
 * @param C 말의 마리수
 * @param xi 좌표 배열
 * @description 마구간에 말이 거리를 지키면서 들어갈 수 있는지 확인하는 함수
 */
function selectStall(N: number, C: number, xi: number[]) {
  const sortedArr = [...xi].sort((a, b) => {
    return a - b;
  });

  const maxNum = sortedArr[N - 1];
  let start = 0, end = maxNum, ans = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (check(mid, C, sortedArr) > 0) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans;
}

/**
 * @param num 거리
 * @param C 말의 마리수
 * @param xi 좌표 배열
 * @description 마구간에 말이 거리를 지키면서 들어갈 수 있는지 확인하는 함수
 * 탐욕법으로 무조건 마리 사이 사이의 간격이 dist보다 크기만 하면 말의 마리수를 감소시킨다.
 */
function check(num: number, C: number, xi: number[]) {
  const dist = num;
  let numOfHorse = C - 1;
  let cur = 0;
  for (let i = 1; i < xi.length; i++) {
    if (xi[i] - xi[cur] >= dist) {
      numOfHorse--;
      cur = i;
    }
  }
  return numOfHorse;
}

export default selectStall;