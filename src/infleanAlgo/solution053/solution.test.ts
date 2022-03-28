import solution from './PrintKNaryNumber';

describe('k진수 출력', function() {
  it('#1', () => {
    const ans = solution(125, 2);
    expect(ans).toBe('1111101');
  });
  it('#2', () => {
    const ans = solution(512, 16);
    expect(ans).toBe('200');
  });
  it('#3', () => {
    const ans = solution(725, 8);
    expect(ans).toBe('1325');
  });
  it('#4', () => {
    const ans = solution(999, 16);
    expect(ans).toBe('3E7');
  });
  it('#5', () => {
    const ans = solution(625, 5);
    expect(ans).toBe('10000');
  });
});