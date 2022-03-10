function num_of_prime_number(N: number): number {
  const natural_nums_is_prime = Array.from({ length: 200001 }, (_) => true);
  let ans = 0;
  natural_nums_is_prime[0] = false;
  natural_nums_is_prime[1] = false;

  for (let i = 2; i <= N; i++) {
    for (let j = i * 2; j <= N; j += i) {
      natural_nums_is_prime[j] = false;
    }
  }

  for (let i = 2; i <= N; i++) {
    natural_nums_is_prime[i] && ans++;
  }

  return ans;
}

export default num_of_prime_number;