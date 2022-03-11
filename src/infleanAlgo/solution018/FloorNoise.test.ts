import floorNoise from './FloorNoise';
import { readInput, readOutput } from '../utils';

describe('층간소음', () => {
  it('#1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const { N, M, arr } = getArgument(input);
    const ans = floorNoise(N, M, arr);
    expect(String(ans)).toBe(output);
  });
  it('#2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const { N, M, arr } = getArgument(input);
    const ans = floorNoise(N, M, arr);
    expect(String(ans)).toBe(output);
  });
  it('#3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt');
    const { N, M, arr } = getArgument(input);
    const ans = floorNoise(N, M, arr);
    expect(String(ans)).toBe(output);
  });
  it('#4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt');
    const { N, M, arr } = getArgument(input);
    const ans = floorNoise(N, M, arr);
    expect(String(ans)).toBe(output);
  });
  it('#5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt');
    const { N, M, arr } = getArgument(input);
    const ans = floorNoise(N, M, arr);
    expect(String(ans)).toBe(output);
  });
});

function getArgument(input: string) {
  const lines: string[] = input.split('\r\n');
  const [N, M] = lines[0].split(' ').map(v => Number(v));
  const arr = lines[1].split(' ').map(v => Number(v));
  return { N, M, arr };
}