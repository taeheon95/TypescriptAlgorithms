import solution from './CountOfZero';
import { readInput, readOutput } from '../utils';

describe('석차 구하기', function() {
  it('#1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt').split(' ').map(v => Number(v));
    const N = Number(input);
    const ans = solution(N);
    expect(ans).toStrictEqual(output);
  });
  it('#2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt').split(' ').map(v => Number(v));
    const N = Number(input);
    const ans = solution(N);
    expect(ans).toStrictEqual(output);
  });
  it('#3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt').split(' ').map(v => Number(v));
    const N = Number(input);
    const ans = solution(N);
    expect(ans).toStrictEqual(output);
  });
  it('#4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt').split(' ').map(v => Number(v));
    const N = Number(input);
    const ans = solution(N);
    expect(ans).toStrictEqual(output);
  });
  it('#5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt').split(' ').map(v => Number(v));
    const N = Number(input);
    const ans = solution(N);
    expect(ans).toStrictEqual(output);
  });
});