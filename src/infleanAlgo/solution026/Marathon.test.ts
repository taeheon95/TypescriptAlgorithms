import solution from './Marathon';
import { readInput, readOutput } from '../utils';

describe('마라톤', function() {
  it('test', () => {
    const ans = solution(8, [2, 8, 10, 7, 1, 9, 4, 15]);
    expect(ans).toStrictEqual([1, 1, 1, 3, 5, 2, 5, 1]);
  });
  it('test case #1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const { N, arr } = getInput(input);
    const answer = getOutput(output);
    expect(solution(N, arr)).toStrictEqual(answer);
  });
  it('test case #2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const { N, arr } = getInput(input);
    const answer = getOutput(output);
    expect(solution(N, arr)).toStrictEqual(answer);
  });
  it('test case #3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt');
    const { N, arr } = getInput(input);
    const answer = getOutput(output);
    expect(solution(N, arr)).toStrictEqual(answer);
  });
  it('test case #4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt');
    const { N, arr } = getInput(input);
    const answer = getOutput(output);
    expect(solution(N, arr)).toStrictEqual(answer);
  });
  it('test case #5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt');
    const { N, arr } = getInput(input);
    const answer = getOutput(output);
    expect(solution(N, arr)).toStrictEqual(answer);
  });
});

const getInput = (input: string) => {
  const [N, arr] = input.trim().split('\r\n');
  return {
    N: Number(N),
    arr: arr.split(' ').map(v => Number(v)),
  };
};

const getOutput = (output: string) => output.trim().split(' ').map((v) => Number(v));