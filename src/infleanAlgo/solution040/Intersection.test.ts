import solution from './Intersection';
import { readInput, readOutput } from '../utils';

describe('교집합 해결', function() {

  let count = 1;

  afterEach(() => {
    count++;
  });

  it('# 1', () => {
    const [arrA, arrB] = getInput(`in${count}.txt`);
    const ans = getOutput(`out${count}.txt`);
    expect(solution(arrA, arrB)).toStrictEqual(ans);
  });
  it('# 2', () => {
    const [arrA, arrB] = getInput(`in${count}.txt`);
    const ans = getOutput(`out${count}.txt`);
    expect(solution(arrA, arrB)).toStrictEqual(ans);
  });
  it('# 3', () => {
    const [arrA, arrB] = getInput(`in${count}.txt`);
    const ans = getOutput(`out${count}.txt`);
    expect(solution(arrA, arrB)).toStrictEqual(ans);
  });
  it('# 4', () => {
    const [arrA, arrB] = getInput(`in${count}.txt`);
    const ans = getOutput(`out${count}.txt`);
    expect(solution(arrA, arrB)).toStrictEqual(ans);
  });
  it('# 5', () => {
    const [arrA, arrB] = getInput(`in${count}.txt`);
    const ans = getOutput(`out${count}.txt`);
    expect(solution(arrA, arrB)).toStrictEqual(ans);
  });
});

const getInput = (fileName: string) => {
  const input = readInput(__dirname, fileName);
  const [N1, arr1, N2, arr2] = input.split('\r\n');
  const rArr1 = arr1.trim().split(' ').map(v => Number(v));
  const rArr2 = arr2.trim().split(' ').map(v => Number(v));
  return [rArr1, rArr2];
};

const getOutput = (fileName: string) => {
  return readOutput(__dirname, fileName).trim().split(' ').map(v => Number(v));
};