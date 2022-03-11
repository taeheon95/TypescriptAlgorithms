import { readInput, readOutput } from '../utils';
import correct_bracket from './correct_bracket';

describe('올바른 괄호', function() {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `in${count}.txt`);
    output = readOutput(__dirname, `out${count}.txt`);
    console.log(count);
  });

  it('#1', () => {
    expect(correct_bracket(input)).toBe(output);
    count++;
  });
  it('#2', () => {
    expect(correct_bracket(input)).toBe(output);
    count++;
  });
  it('#3', () => {
    expect(correct_bracket(input)).toBe(output);
    count++;
  });
  it('#4', () => {
    expect(correct_bracket(input)).toBe(output);
    count++;
  });
  it('#5', () => {
    expect(correct_bracket(input)).toBe(output);
    count++;
  });
});