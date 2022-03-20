import solution from './SpecialSort';
import { readInput, readOutput } from '../utils';

describe('Special sort 테스트', function() {
  it('test case 1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const { n, list } = getInput(input);
    const ans = getOutput(output);
    const exp = solution(n, list);
    expect(exp).toStrictEqual(ans);
  });
  it('test case 2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const { n, list } = getInput(input);
    const ans = getOutput(output);
    const exp = solution(n, list);
    expect(exp).toStrictEqual(ans);
  });
  it('test case 3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt');
    const { n, list } = getInput(input);
    const ans = getOutput(output);
    const exp = solution(n, list);
    expect(exp).toStrictEqual(ans);
  });
  it('test case 4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt');
    const { n, list } = getInput(input);
    const ans = getOutput(output);
    const exp = solution(n, list);
    expect(exp).toStrictEqual(ans);
  });
  it('test case 5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt');
    const { n, list } = getInput(input);
    const ans = getOutput(output);
    const exp = solution(n, list);
    expect(exp).toStrictEqual(ans);
  });
});

const getInput = (input: string) => {
  const [n, arr] = input.split('\r\n');
  const list = arr.split(' ').map(v => Number(v));
  return { n: Number(n), list };
};

const getOutput = (output: string) => {
  return output.split(' ').map(v => Number(v));
};