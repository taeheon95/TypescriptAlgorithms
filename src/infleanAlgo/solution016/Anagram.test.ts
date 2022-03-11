import anagram from './Anagram';
import { readInput, readOutput } from '../utils';

describe('아나그램', function() {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `in${count}.txt`);
    output = readOutput(__dirname, `out${count}.txt`);
    console.log(count);
  });

  it('#1', () => {
    const [first, second] = input.split('\r\n');
    const ans = anagram(first, second);
    expect(ans).toBe(output);
    count++;
  });

  it('#2', () => {
    const [first, second] = input.split('\r\n');
    const ans = anagram(first, second);
    expect(ans).toBe(output);
    count++;
  });

  it('#3', () => {
    const [first, second] = input.split('\r\n');
    const ans = anagram(first, second);
    expect(ans).toBe(output);
    count++;
  });


  it('#4', () => {
    const [first, second] = input.split('\r\n');
    const ans = anagram(first, second);
    expect(ans).toBe(output);
    count++;
  });

  it('#5', () => {
    const [first, second] = input.split('\r\n');
    const ans = anagram(first, second);
    expect(ans).toBe(output);
    count++;
  });
});