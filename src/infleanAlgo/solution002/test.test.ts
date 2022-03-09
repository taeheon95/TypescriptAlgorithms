import sum_of_nature from './sum_of_nature';
import { readInput, readOutput } from '../utils';

describe('자연수의 합', () => {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `/in${count}.txt`);
    output = readOutput(__dirname, `/out${count}.txt`);
    console.log(count);
  });

  it('test case 1', () => {
    const [start, end] = input.split(' ').map(v => Number(v));
    expect(sum_of_nature(start, end)).toBe(output);
    count++;
  });
  it('test case 2', () => {
    const [start, end] = input.split(' ').map(v => Number(v));
    expect(sum_of_nature(start, end)).toBe(output);
    count++;
  });
  it('test case 3', () => {
    const [start, end] = input.split(' ').map(v => Number(v));
    expect(sum_of_nature(start, end)).toBe(output);
    count++;
  });
  it('test case 4', () => {
    const [start, end] = input.split(' ').map(v => Number(v));
    expect(sum_of_nature(start, end)).toBe(output);
    count++;
  });
  it('test case 5', () => {
    const [start, end] = input.split(' ').map(v => Number(v));
    expect(sum_of_nature(start, end)).toBe(output);
    count++;
  });
});