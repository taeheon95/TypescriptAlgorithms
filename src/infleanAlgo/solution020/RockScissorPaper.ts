function rockScissorPaper(N: number, A: number[], B: number[]): string[] {
  const ans: string[] = [];

  for (let i = 0; i < N; i++) {
    ans.push(getResult(A[i], B[i]));
  }

  return ans;
}

const getResult = (a: number, b: number) => {
  switch (a - b) {
    case 2:
      return 'B';
    case 1:
      return 'A';
    case 0:
      return 'D';
    case -1:
      return 'B';
    default:
      return 'A';
  }
};

export default rockScissorPaper;