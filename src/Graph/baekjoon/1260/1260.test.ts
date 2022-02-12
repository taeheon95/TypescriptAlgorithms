import solution from './1260';

describe('1260 DFS와 BFS', () => {
  it('첫번째 케이스', () => {
    // N 정점의 갯수
    // M 간선의 갯수
    // V 시작 정점
    // given
    const [N, M, V] = [4, 5, 1];
    const arr = [[1, 2], [1, 3], [1, 4], [2, 4], [3, 4]];
    // when
    const ans = solution(N, M, V, arr);
    // then
    expect(ans).toStrictEqual([[1, 2, 4, 3], [1, 2, 3, 4]]);
  });
});