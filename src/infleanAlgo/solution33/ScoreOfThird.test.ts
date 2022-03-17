import solution from './ScoreOfThird';
import { readInput, readOutput } from '../utils';

describe('3등의 성적은?', function() {
  it('test', () => {
    const ans = solution(7, [80, 96, 75, 82, 96, 92, 100]);
    expect(ans).toBe(92);
  });
  it('# test case 1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const { N, scores } = getParsedInput(input);
    const ans = Number(readOutput(__dirname, 'out1.txt'));
    const exp = solution(N, scores);
    expect(exp).toBe(ans);
  });
  it('# test case 2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const { N, scores } = getParsedInput(input);
    const ans = Number(readOutput(__dirname, 'out2.txt'));
    const exp = solution(N, scores);
    expect(exp).toBe(ans);
  });
  it('# test case 3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const { N, scores } = getParsedInput(input);
    const ans = Number(readOutput(__dirname, 'out3.txt'));
    const exp = solution(N, scores);
    expect(exp).toBe(ans);
  });
  it('# test case 4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const { N, scores } = getParsedInput(input);
    const ans = Number(readOutput(__dirname, 'out4.txt'));
    const exp = solution(N, scores);
    expect(exp).toBe(ans);
  });
  it('# test case 5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const { N, scores } = getParsedInput(input);
    const ans = Number(readOutput(__dirname, 'out5.txt'));
    const exp = solution(N, scores);
    expect(exp).toBe(ans);
  });

});

const getParsedInput = (input: string) => {
  const [N, arr] = input.split('\r\n');
  const scores = arr.split(' ').map((v) => Number(v));
  return { N: Number(N), scores };
};