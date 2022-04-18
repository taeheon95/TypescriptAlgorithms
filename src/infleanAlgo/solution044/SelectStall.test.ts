import selectStall from './SelectStall';
import { readInput, readOutput } from '../utils';

describe('마구간 정하기', function() {
  it('should 3', function() {
    const exp = selectStall(5, 3, [1, 2, 8, 4, 9]);
    expect(exp).toBe(3);
  });
  it('should solve 1', function() {
    const { N, C, arr } = getInput(1);
    const ans = getOutput(1);
    const exp = selectStall(N, C, arr);
    expect(exp).toBe(ans);
  });
  it('should solve 2', function() {
    const { N, C, arr } = getInput(2);
    const ans = getOutput(2);
    const exp = selectStall(N, C, arr);
    expect(exp).toBe(ans);
  });
  it('should solve 3', function() {
    const { N, C, arr } = getInput(3);
    const ans = getOutput(3);
    const exp = selectStall(N, C, arr);
    expect(exp).toBe(ans);
  });
  it('should solve 4', function() {
    const { N, C, arr } = getInput(4);
    const ans = getOutput(4);
    const exp = selectStall(N, C, arr);
    expect(exp).toBe(ans);
  });
  it('should solve 5', function() {
    const { N, C, arr } = getInput(5);
    const ans = getOutput(5);
    const exp = selectStall(N, C, arr);
    expect(exp).toBe(ans);
  });
});

const getInput = (num: number) => {
  const str = readInput(__dirname, `in${num}.txt`);
  const tempArr = str.trim().split(/\s/g).map(v => Number(v));
  const [N, C] = [tempArr[0], tempArr[1]];
  const arr = tempArr.slice(2);
  return { N, C, arr };
};

const getOutput = (num: number) => {
  const ans = readOutput(__dirname, `out${num}.txt`);
  return Number(ans);
};