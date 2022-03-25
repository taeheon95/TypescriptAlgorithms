import solution from './SumOfConsecutiveNature';
import { readInput, readOutput } from '../utils';

describe('연속된 자연수의 합', function() {
  it('#1', () => {
    const N = getInput(1);
    const out = getOutput(1);
    const ans = solution(N);
    const exp = makeExpect(ans, N);
    expect(exp).toBe(out);
  });
  it('#2', () => {
    const N = getInput(2);
    const out = getOutput(2);
    const ans = solution(N);
    const exp = makeExpect(ans, N);
    expect(exp).toBe(out);
  });
  it('#3', () => {
    const N = getInput(3);
    const out = getOutput(3);
    const ans = solution(N);
    const exp = makeExpect(ans, N);
    expect(exp).toBe(out);
  });
  it('#4', () => {
    const N = getInput(4);
    const out = getOutput(4);
    const ans = solution(N);
    const exp = makeExpect(ans, N);
    expect(exp).toBe(out);
  });
  it('#5', () => {
    const N = getInput(5);
    const out = getOutput(5);
    const ans = solution(N);
    const exp = makeExpect(ans, N);
    expect(exp).toBe(out);
  });
});

const getInput = (n: number) => {
  const input = readInput(__dirname, `in${n}.txt`);
  return Number(input);
};

const getOutput = (n: number) => {
  return readOutput(__dirname, `out${n}.txt`);
};

const makeExpect = (exp: number[][], N: number) => {
  const newExp = exp.map(v => {
    let temp = v.join(' + ');
    return `${temp} = ${N}`;
  }).join('\r\n');
  return `${newExp}\r\n${exp.length}`;
};