import compute_age from './compute_age';
import { readInput, readOutput } from '../utils';

describe('나이계산', function() {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `in${count}.txt`);
    output = readOutput(__dirname, `out${count}.txt`);
    console.log(count);
  });

  it('#1', () => {
    expect(compute_age(input)).toBe(output);
    count++;
  });
  it('#2', () => {
    expect(compute_age(input)).toBe(output);
    count++;
  });
  it('#3', () => {
    expect(compute_age(input)).toBe(output);
    count++;
  });
  it('#4', () => {
    expect(compute_age(input)).toBe(output);
    count++;
  });
  it('#5', () => {
    expect(compute_age(input)).toBe(output);
    count++;
  });
});