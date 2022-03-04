import minimumCostPath from './MinimumCostPath';

describe('최소 비용 패스', () => {
  it('테스트 케이스 #1', () => {
    const matrix:number[][] = [[2,1],[3,1],[4,2]];
    expect(minimumCostPath(matrix)).toBe(6);
  });
  it('테스트 케이스 #2', () => {
    const matrix:number[][] = [[2,1,4],[2,1,3],[3,2,1]]
    expect(minimumCostPath(matrix)).toBe(7);
  });
});