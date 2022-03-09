function age_diff(N: number, ageList: number[]) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  const getMax = (a: number, b: number): number => a > b ? a : b;
  const getMin = (a: number, b: number): number => a > b ? b : a;

  ageList.forEach((age) => {
    max = getMax(age, max);
    min = getMin(age, min);
  });

  return max - min;
}

export default age_diff;