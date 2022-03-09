function sum_of_digit(N: number, arr: number[]) {
  let max = 0;

  let getMax = (a: number, b: number) => {
    if (digit_sum(a) > digit_sum(b)) {
      return a;
    } else if (digit_sum(a) === digit_sum(b)) {
      return a > b ? a : b;
    } else {
      return b;
    }
  };

  for (let i = 0; i < arr.length; i++) {
    max = getMax(max, arr[i]);
  }

  return max;
}


function digit_sum(N: number): number {
  let sum = 0;
  let n = N;
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

export default sum_of_digit;