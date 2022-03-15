import solution from './CountOfThree';

describe('3의 개수', function() {
  it('test', () => {
    const ans = solution(15);
    expect(ans).toBe(2);
  });
  it('test case #1', () => {
    const ans = solution(10000);
    expect(ans).toBe(4000);
  });
  it('test case #2', () => {
    const ans = solution(45625);
    expect(ans).toBe(28723);
  });
  it('test case #3', () => {
    const ans = solution(87654);
    expect(ans).toBe(45336);
  });
  it('test case #4', () => {
    const ans = solution(99999);
    expect(ans).toBe(50000);
  });
  it('test case #5', () => {
    const ans = solution(1);
    expect(ans).toBe(0);
  });
});