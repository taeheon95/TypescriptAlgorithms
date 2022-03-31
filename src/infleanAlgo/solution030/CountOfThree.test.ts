import solution from './CountOfThree';

describe('3의 개수(large)', function() {
  it('test', () => {
    const ans = solution('15');
    expect(ans).toBe(2);
  });
  it('test case #1', () => {
    const ans = solution('2');
    expect(ans).toBe(0);
  });
  it('test case #2', () => {
    const ans = solution('45625');
    expect(ans).toBe(28723);
  });
  it('test case #3', () => {
    const ans = solution('87654');
    expect(ans).toBe(45336);
  });
  it('test case #4', () => {
    const ans = solution('123456789');
    expect(ans).toBe(96589849);
  });
  it('test case #5', () => {
    const ans = solution('999999992');
    expect(ans).toBe(899999999);
  });
});