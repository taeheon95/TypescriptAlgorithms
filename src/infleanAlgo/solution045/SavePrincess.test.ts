import solution from './SavePrincess';
import { readInput, readOutput } from '../utils';

describe('공주 구하기', function() {
  let count = 0;
  afterEach(() => {
    count++;
  });
  it('test case', () => {
    const ans = solution(8, 3);
    expect(ans).toBe(7);
  });
  it('#1', () => {
    const [N, K] = getInput(1);
    const exp = getOutput(1);
    const ans = solution(N, K);
    expect(ans).toBe(exp);
  });
  it('#2', () => {
    const [N, K] = getInput(2);
    const exp = getOutput(2);
    const ans = solution(N, K);
    expect(ans).toBe(exp);
  });
  it('#3', () => {
    const [N, K] = getInput(3);
    const exp = getOutput(3);
    const ans = solution(N, K);
    expect(ans).toBe(exp);
  });
  it('#4', () => {
    const [N, K] = getInput(4);
    const exp = getOutput(4);
    const ans = solution(N, K);
    expect(ans).toBe(exp);
  });
  it('#5', () => {
    const [N, K] = getInput(5);
    const exp = getOutput(5);
    const ans = solution(N, K);
    expect(ans).toBe(exp);
  });
});

const getInput = (n: number) => {
  const [N, K] = readInput(__dirname, `in${n}.txt`).trim().split(' ').map(inp => Number(inp));
  return [N, K];
};

const getOutput = (n: number) => {
  return Number(readOutput(__dirname, `out${n}.txt`).trim());
};