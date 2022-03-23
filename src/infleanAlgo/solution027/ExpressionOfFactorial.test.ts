import expressionOfFactorial from './ExpressionOfFactorial';
import { readInput, readOutput } from '../utils';

describe('N!의 표현법', function() {
  it('#test case', () => {
    const ans = expressionOfFactorial(5);
    console.log(ans);
    expect(ans).toStrictEqual([3, 1, 1]);
  });
  it('#1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const N = Number(input);
    const ans = expressionOfFactorial(N);
    const strAns = getFormattedAns(N, ans);
    expect(strAns).toBe(output);
  });
  it('#2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const N = Number(input);
    const ans = expressionOfFactorial(N);
    const strAns = getFormattedAns(N, ans);
    expect(strAns).toBe(output);
  });
  it('#3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt').trim();
    const N = Number(input);
    const ans = expressionOfFactorial(N);
    const strAns = getFormattedAns(N, ans);
    expect(strAns).toBe(output);
  });
  it('#4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt').trim();
    const N = Number(input);
    const ans = expressionOfFactorial(N);
    const strAns = getFormattedAns(N, ans);
    expect(strAns).toBe(output);
  });
  it('#5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt').trim();
    const N = Number(input);
    const ans = expressionOfFactorial(N);
    const strAns = getFormattedAns(N, ans);
    expect(strAns).toBe(output);
  });
});

const getFormattedAns = (input: number, ans: number[]): string => {
  return `${input}! = ${ans.join(' ')}`;
};