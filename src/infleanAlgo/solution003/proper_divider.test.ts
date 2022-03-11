import proper_divider from './proper_divider';
import { readInput, readOutput } from '../utils';

describe('진약수의 합', () => {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `in${count}.txt`);
    output = readOutput(__dirname, `out${count}.txt`);
    console.log(count);
  });

  it('test case 1', () => {
    expect(proper_divider(Number(input))).toBe(output);
    count++;
  });
  it('test case 2', () => {
    expect(proper_divider(Number(input))).toBe(output);
    count++;
  });
  it('test case 3', () => {
    expect(proper_divider(Number(input))).toBe(output);
    count++;
  });
  it('test case 4', () => {
    expect(proper_divider(Number(input))).toBe(output);
    count++;
  });
  it('test case 5', () => {
    expect(proper_divider(Number(input))).toBe(output);
    count++;
  });
});
