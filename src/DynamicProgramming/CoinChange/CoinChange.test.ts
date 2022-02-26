import findMinCoin from './CoinChange';

describe('동전 교환 알고리즘 테스트', function() {
  const coin = [1, 2, 5, 10];
  it('15를 넣었을 때', () => {
    const rValue = findMinCoin(coin, 15);
    expect(rValue).toBe(2);
  });
});