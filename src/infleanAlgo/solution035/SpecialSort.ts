function specialSort(N: number, arr: number[]): number[] {
  const minusNum: number[] = [];
  const plusNum: number[] = [];

  arr.forEach((v) => {
    v > 0 ? plusNum.push(v) : minusNum.push(v);
  });

  return [...minusNum, ...plusNum];
}

export default specialSort;