import rockScissorPaper from './RockScissorPaper';
import { readInput, readOutput } from '../utils';

describe('가위 바위 보', function() {
  it('#1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const { N, A, B } = getArgument(input);
    const ans = rockScissorPaper(N, A, B).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const { N, A, B } = getArgument(input);
    const ans = rockScissorPaper(N, A, B).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt');
    const { N, A, B } = getArgument(input);
    const ans = rockScissorPaper(N, A, B).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt');
    const { N, A, B } = getArgument(input);
    const ans = rockScissorPaper(N, A, B).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt');
    const { N, A, B } = getArgument(input);
    const ans = rockScissorPaper(N, A, B).join('\r\n');
    expect(ans).toBe(output);
  });
});

const getArgument = (input: string) => {
  const [n, a, b] = input.split('\r\n');
  return {
    N: Number(n),
    A: a.split(' ').map(v => Number(v)),
    B: b.split(' ').map(v => Number(v)),
  };
};