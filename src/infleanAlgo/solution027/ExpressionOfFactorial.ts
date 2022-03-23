interface FactoType {
  [key: number]: number;
}

function expressionOfFactorial(N: number): number[] {
  const check = Array.from({ length: N + 1 }, () => 0);
  for (let i = 2; i <= N; i++) {
    let tmp = i;
    let j = 2;
    while (tmp !== 1) {
      if (tmp % j === 0) {
        tmp = Math.floor(tmp / j);
        check[j]++;
      } else j++;
    }
  }
  return check.filter(v => v !== 0);
}

export default expressionOfFactorial;