function ComputeGrade(N: number, grade: number[]): number[] {
  const ans: number[] = Array.from({ length: N }, () => 1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) {
        continue;
      }
      if (grade[i] < grade[j]) {
        ans[i]++;
      }
    }
  }

  return ans;
}

export default ComputeGrade;