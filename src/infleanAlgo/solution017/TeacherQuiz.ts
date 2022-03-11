function teacherQuiz(N: number, quiz: number[][]) {
  const ans: string[] = [];

  quiz.forEach((q) => {
    if (q[0] * (q[0] + 1) / 2 === q[1]) {
      ans.push('YES');
    } else {
      ans.push('NO');
    }
  });

  return ans;
}

export default teacherQuiz;