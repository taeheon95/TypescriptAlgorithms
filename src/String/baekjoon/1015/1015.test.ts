import solution from './1015';

describe('1015번 수열 정렬', () => {
  it('첫번째 케이스', () => {
    // solution
    const ans = solution('3', '2 3 1');
    expect(ans).toBe('1 2 0');
  });
  it('두번째 케이스', () => {
    const ans = solution('4', '2 1 3 1');
    expect(ans).toBe('2 0 3 1');
  });
});