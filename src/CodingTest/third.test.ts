import solution from './third';

describe('grid', function() {
  it('#1', () => {
    const grid = [[1, 1, 1, 1], [2, 1, 2, 2], [2, 2, 2, 1], [1, 1, 2, 2]];
    const result = solution(grid);
    expect(result).toBe(5);
  });
  it('#2', () => {
    const grid = [[1, 1, 1, 2], [1, 1, 1, 2], [2, 2, 2, 1], [1, 2, 2, 2]];
    const result = solution(grid);
    expect(result).toBe(5);
  });
});