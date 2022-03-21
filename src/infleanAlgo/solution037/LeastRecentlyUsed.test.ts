import solution from './LeastRecentlyUsed';
import { readInput } from '../utils';

describe('LRU', function() {
  it('test case 1', () => {
    console.time();
    const ans = solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
    console.timeEnd();
    expect(ans).toStrictEqual([7, 5, 3, 2, 6]);
  });
  it('#1', () => {
    const { S, N, jobList, ans } = getSolutionInfo(1);
    console.time();
    const exp = solution(S, N, jobList);
    console.timeEnd();
    expect(exp).toStrictEqual(ans);
  });
  it('#2', () => {
    const { S, N, jobList, ans } = getSolutionInfo(2);
    console.time();
    const exp = solution(S, N, jobList);
    console.timeEnd();
    expect(exp).toStrictEqual(ans);
  });
  it('#3', () => {
    const { S, N, jobList, ans } = getSolutionInfo(3);
    console.time();
    const exp = solution(S, N, jobList);
    console.timeEnd();
    expect(exp).toStrictEqual(ans);
  });
  it('#4', () => {
    const { S, N, jobList, ans } = getSolutionInfo(4);
    console.time();
    const exp = solution(S, N, jobList);
    console.timeEnd();
    expect(exp).toStrictEqual(ans);
  });
  it('#5', () => {
    const { S, N, jobList, ans } = getSolutionInfo(5);
    console.time();
    const exp = solution(S, N, jobList);
    console.timeEnd();
    expect(exp).toStrictEqual(ans);
  });
});

const getSolutionInfo = (num: number) => {
  const [[S, N], jobList] = readInput(__dirname, `in${num}.txt`).split('\r\n').map((s) => s.split(' ').map(w => Number(w)));
  const ans = readInput(__dirname, `out${num}.txt`).split(' ').map(v => Number(v));
  return { S, N, jobList, ans };
};