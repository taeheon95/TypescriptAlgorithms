import solution from './9935';

describe('문자열 폭팔', () => {
  it('첫번째 케이스', () => {
    const str_list = ['mirkovC4nizCC44', 'C4'];
    expect(solution(str_list)).toBe('mirkovniz');
  });
  it('두번째 케이스', () => {
    const str_list = ['12ab112ab2ab', '12ab'];
    expect(solution(str_list)).toBe('FRULA');
  });
  it('첫번째 케이스 시간 측정', () => {
    const str_list = ['mirkovC4nizCC44', 'C4'];
    const start = new Date().getTime();
    expect(solution(str_list)).toBe('mirkovniz');
    const end = new Date().getTime();
    console.log(end - start);
    expect(end - start).toBeLessThanOrEqual(2000);
  });
  it('두번째 케이스 시간 측정', () => {
    const str_list = ['12ab112ab2ab', '12ab'];
    const start = new Date().getTime();
    expect(solution(str_list)).toBe('FRULA');
    const end = new Date().getTime();
    console.log(end - start);
    expect(end - start).toBeLessThanOrEqual(2000);
  });
});