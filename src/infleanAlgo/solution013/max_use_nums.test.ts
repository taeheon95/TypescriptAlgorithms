import max_use_nums from './max_use_nums';
import { readInput, readOutput } from '../utils';

describe('숫자의 총 개수(large)', function() {

  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `in${count}.txt`);
    output = readOutput(__dirname, `out${count}.txt`);
    console.log(count);
  });

  it('#1', () => {
    const ans = max_use_nums(input);
    expect(ans).toBe(Number(output));
    count++;
  });
  it('#2', () => {
    const ans = max_use_nums(input);
    expect(ans).toBe(Number(output));
    count++;
  });
  it('#3', () => {
    const ans = max_use_nums(input);
    expect(ans).toBe(Number(output));
    count++;
  });
  it('#4', () => {
    const ans = max_use_nums(input);
    expect(ans).toBe(Number(output));
    count++;
  });
  it('#5', () => {
    const ans = max_use_nums(input);
    expect(ans).toBe(Number(output));
    count++;
  });
});