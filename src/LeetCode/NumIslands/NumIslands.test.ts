import { numIslands } from './NumIslands';

describe('num of islands', () => {
  it('test case #1', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    const ans = numIslands(grid);
    expect(ans).toBe(1);
  });
});