import solution from './second';

describe('바둑판', function() {

  it('#1', () => {
    const board = ['111100000', '000010011', '111100011', '111110011', '111100011', '111100010', '111100000'];
    expect(solution(7, 9, 4, board)).toBe(10);
  });
  it('#2', () => {
    const board = ['11111', '11111', '11111', '11111', '11111'];
    expect(solution(5, 5, 5, board)).toBe(12);
  });
});