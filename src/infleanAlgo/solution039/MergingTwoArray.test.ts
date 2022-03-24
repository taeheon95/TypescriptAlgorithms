import solution from './MergingTwoArray';
import { readInput, readOutput } from '../utils';

describe('두 배열 합치기', function() {
  it('#1', () => {
    const [arr1, arr2] = getInput('in1.txt');
    const exp = getOuput('out1.txt');
    const ans = solution(arr1, arr2);
    expect(ans).toStrictEqual(exp);
  });
  it('#2', () => {
    const [arr1, arr2] = getInput('in2.txt');
    const exp = getOuput('out2.txt');
    const ans = solution(arr1, arr2);
    expect(ans).toStrictEqual(exp);
  });
  it('#3', () => {
    const [arr1, arr2] = getInput('in3.txt');
    const exp = getOuput('out3.txt');
    const ans = solution(arr1, arr2);
    expect(ans).toStrictEqual(exp);
  });
  it('#4', () => {
    const [arr1, arr2] = getInput('in4.txt');
    const exp = getOuput('out4.txt');
    const ans = solution(arr1, arr2);
    expect(ans).toStrictEqual(exp);
  });
  it('#5', () => {
    const [arr1, arr2] = getInput('in5.txt');
    const exp = getOuput('out5.txt');
    const ans = solution(arr1, arr2);
    expect(ans).toStrictEqual(exp);
  });
});

const getInput = (fileName: string) => {
  const input = readInput(__dirname, fileName);
  const [N1, arr1, N2, arr2] = input.split('\r\n');
  const rArr1 = arr1.trim().split(' ').map(v => Number(v));
  const rArr2 = arr2.trim().split(' ').map(v => Number(v));
  return [rArr1, rArr2];
};

const getOuput = (fileName: string) => {
  return readOutput(__dirname, fileName).trim().split(' ').map(v => Number(v));
};