import MaximumOfBlock from './MaximumOfBlock';
import { readInput, readOutput } from '../utils';

describe('블록의 최댓값', function() {
  it('test case', () => {
    const ans = MaximumOfBlock(4, [2, 0, 3, 1], [1, 1, 2, 3]);
    expect(ans).toBe(17);
  });
  it('#1', () => {
    const { N, front, rightSide } = getInput(1);
    const exp = getOutput(1);
    const ans = MaximumOfBlock(N, front, rightSide);
    expect(ans).toBe(exp);
  });
  it('#2', () => {
    const { N, front, rightSide } = getInput(2);
    const exp = getOutput(2);
    const ans = MaximumOfBlock(N, front, rightSide);
    expect(ans).toBe(exp);
  });
  it('#3', () => {
    const { N, front, rightSide } = getInput(3);
    const exp = getOutput(3);
    const ans = MaximumOfBlock(N, front, rightSide);
    expect(ans).toBe(exp);
  });
  it('#4', () => {
    const { N, front, rightSide } = getInput(4);
    const exp = getOutput(4);
    const ans = MaximumOfBlock(N, front, rightSide);
    expect(ans).toBe(exp);
  });
  it('#5', () => {
    const { N, front, rightSide } = getInput(5);
    const exp = getOutput(5);
    const ans = MaximumOfBlock(N, front, rightSide);
    expect(ans).toBe(exp);
  });
});

const getInput = (num: number) => {
  const inp = readInput(__dirname, `in${num}.txt`);
  const [N, front, rightSide] = inp.trim().split('\r\n');
  return {
    N: Number(N),
    front: front.trim().split(' ').map(v => Number(v)),
    rightSide: rightSide.trim().split(' ').map(v => Number(v)),
  };
};

const getOutput = (num: number) => {
  return Number(readOutput(__dirname, `out${num}.txt`).trim());
};