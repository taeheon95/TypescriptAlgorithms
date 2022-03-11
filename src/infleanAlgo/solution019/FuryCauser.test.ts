import furyCauser from './FuryCauser';
import { readInput, readOutput } from '../utils';

describe('분노 유발자', function() {
  it('#1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const { N, heights } = getArgument(input);
    const ans = String(furyCauser(N, heights));
    expect(ans).toBe(output);
  });
  it('#2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const { N, heights } = getArgument(input);
    const ans = String(furyCauser(N, heights));
    expect(ans).toBe(output);
  });
  it('#3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt');
    const { N, heights } = getArgument(input);
    const ans = String(furyCauser(N, heights));
    expect(ans).toBe(output);
  });
  it('#4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt');
    const { N, heights } = getArgument(input);
    const ans = String(furyCauser(N, heights));
    expect(ans).toBe(output);
  });
  it('#5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt');
    const { N, heights } = getArgument(input);
    const ans = String(furyCauser(N, heights));
    expect(ans).toBe(output);
  });
});

function getArgument(input: string) {
  const lines = input.split('\r\n');
  const N = Number(lines[0]);
  const heights = lines[1].split(' ').map((v) => Number(v));
  return { N, heights };
}