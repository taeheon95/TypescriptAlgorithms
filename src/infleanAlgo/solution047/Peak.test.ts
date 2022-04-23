import solution from './Peak';
import { readInput, readOutput } from '../utils';

describe('봉우리', function() {
  it('#1', () => {
    const { N, numMap } = getInput(1);
    const exp = getOutput(1);
    const ans = solution(N, numMap);
    expect(ans).toBe(exp);
  });
  it('#2', () => {
    const { N, numMap } = getInput(2);
    const exp = getOutput(2);
    const ans = solution(N, numMap);
    expect(ans).toBe(exp);
  });
  it('#3', () => {
    const { N, numMap } = getInput(3);
    const exp = getOutput(3);
    const ans = solution(N, numMap);
    expect(ans).toBe(exp);
  });
  it('#4', () => {
    const { N, numMap } = getInput(4);
    const exp = getOutput(4);
    const ans = solution(N, numMap);
    expect(ans).toBe(exp);
  });
  it('#5', () => {
    const { N, numMap } = getInput(5);
    const exp = getOutput(5);
    const ans = solution(N, numMap);
    expect(ans).toBe(exp);
  });
});

const getInput = (n: number) => {
  let [N, ...mapList] = readInput(__dirname, `in${n}.txt`).trim().split('\r\n');
  const _n = Number(N);
  const numMapList = mapList.map(list => list.trim().split(' ').map(v => Number(v)));
  return {
    N: _n,
    numMap: numMapList,
  };
};

const getOutput = (n: number) => {
  return Number(readOutput(__dirname, `out${n}.txt`).trim());
};