import { getAdjSolution, getAns } from './AdjacencyMatrix';

describe('인접행렬(가중치 방향 그래프)', function() {
  it('testcase', function() {
    const input =
      '6 9\r\n' +
      '1 2 7\r\n' +
      '1 3 4\r\n' +
      '2 1 2\r\n' +
      '2 3 5\r\n' +
      '2 5 5\r\n' +
      '3 4 5\r\n' +
      '4 2 2\r\n' +
      '4 5 5\r\n' +
      '6 4 5';
    const output =
      '0 7 4 0 0 0\r\n' +
      '2 0 5 0 5 0\r\n' +
      '0 0 0 5 0 0\r\n' +
      '0 2 0 0 5 0\r\n' +
      '0 0 0 0 0 0\r\n' +
      '0 0 0 5 0 0';

    const exp = getAdjSolution(input);
    const ans = getAns(output);
    expect(exp).toStrictEqual(ans);
  });
});