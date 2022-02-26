/**
 * @param arr 동전의 종류들
 * @param N 만들어 야 할 금액
 * @description 동전 교환 알고리즘은 다이나믹 알고리즘 중 하나이다.
 * 동전 교환 알고리즘은 동전의 종류들로 특정 금액을 만드는 최소한의 경우의 수를 구하는 알고리즘이다.
 */
function findMinCoin(arr: number[], N: number): number {
  const dp: number[] = Array.from({ length: N + 1 }, () => 0);

  dp[0] = 0;

  dp.forEach((_, i) => {
    if (i > 0) {
      dp[i] = Number.MAX_SAFE_INTEGER;
      let res = Number.MAX_SAFE_INTEGER;

      arr.forEach((coin) => {
        if (i - coin >= 0) {
          res = dp[i - coin];
        }

        if (res !== Number.MAX_SAFE_INTEGER) {
          dp[i] = res + 1 > dp[i] ? dp[i] : res + 1;
        }
      });
    }
  });

  return dp[N];
}

export default findMinCoin;