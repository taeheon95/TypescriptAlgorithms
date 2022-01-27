import solution from './2744';

describe('2744 대소문자 바꾸기', () => {
  it('테스트 케이스 1번', () => {
    let str = 'WrongAnswer';
    expect(solution(str)).toBe('wRONGaNSWER');
  });
});
