function intersection(arrA: number[], arrB: number[]) {
  arrA.sort((a, b) => a - b);
  arrB.sort((a, b) => a - b);
  const ans: number[] = [];
  let i = 0, j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      i++;
    } else if (arrA[i] === arrB[j]) {
      ans.push(arrA[i]);
      i++;
      j++;
    } else {
      j++;
    }
  }
  return ans;
}

export default intersection;
