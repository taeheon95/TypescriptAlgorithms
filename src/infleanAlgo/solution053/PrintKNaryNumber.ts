function printKNaryNumber(N: number, K: number): string {
  const arr: number[] = [];
  const str = '0123456789ABCDEF';
  let ans = '';
  let tmp = N;
  while (tmp > 1) {
    arr.push(tmp % K);
    tmp = Math.floor(tmp / K);
  }
  tmp !== 0 && arr.push(tmp);
  while (arr.length !== 0) {
    const num = arr.pop();
    ans = num !== undefined ? ans + str[num] : ans;
  }
  return ans;
}

export default printKNaryNumber;