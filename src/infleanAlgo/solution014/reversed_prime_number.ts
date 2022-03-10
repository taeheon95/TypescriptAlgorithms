function reversed_prime_number(N: number, num_list: number[]): number[] {
  const nums_is_prime = Array.from({ length: 100001 }, (_) => true);
  nums_is_prime[1] = false;
  const ans: number[] = [];
  for (let i = 2; i < nums_is_prime.length; i++) {
    for (let j = i * 2; j < nums_is_prime.length; j += i) {
      nums_is_prime[j] = false;
    }
  }

  num_list.forEach((value) => {
    const reverse_value = reverse(value);
    if (isPrime(reverse_value, nums_is_prime)) {
      ans.push(reverse_value);
    }
  });

  return ans;
}

function reverse(x: number): number {
  let n: number = x;
  let reversed = 0;
  while (n > 0) {
    reversed *= 10;
    reversed += n % 10;
    n = Math.floor(n / 10);
  }
  return reversed;
}

function isPrime(x: number, nums: boolean[]): boolean {
  return nums[x];
}

export default reversed_prime_number;