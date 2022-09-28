function maxProfit(prices: number[]): number {
  const dp = Array.from({ length: prices.length }, () => 0);
  let maxPrice = prices[prices.length - 1];
  for (let i = prices.length - 2; i >= 0; i--) {
    maxPrice = maxPrice > prices[i] ? maxPrice : prices[i];
    dp[i] = maxPrice - prices[i] >= dp[i + 1] ? maxPrice - prices[i] : dp[i + 1];
  }
  return dp[0];
}