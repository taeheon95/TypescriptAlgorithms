import sum_of_digit from './sum_of_digit';
import { readInput, readOutput } from '../utils';

describe('자릿수의 합', function() {

  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `in${count}.txt`);
    output = readOutput(__dirname, `out${count}.txt`);
    console.log(count);
  });

  it('#1', () => {
    const [n, arr] = input.split('\r\n');
    const N = Number(n);
    const nums = arr.split(' ').map(v => Number(v));
    const ans = Number(output);
    const expectAns = sum_of_digit(N, nums);
    expect(expectAns).toBe(ans);
    count++;
  });

  it('#2', () => {
    const [n, arr] = input.split('\r\n');
    const N = Number(n);
    const nums = arr.split(' ').map(v => Number(v));
    const ans = Number(output);
    const expectAns = sum_of_digit(N, nums);
    expect(expectAns).toBe(ans);
    count++;
  });

  it('#3', () => {
    const [n, arr] = input.split('\r\n');
    const N = Number(n);
    const nums = arr.split(' ').map(v => Number(v));
    const ans = Number(output);
    const expectAns = sum_of_digit(N, nums);
    expect(expectAns).toBe(ans);
    count++;
  });

  it('#4', () => {
    const [n, arr] = input.split('\r\n');
    const N = Number(n);
    const nums = arr.split(' ').map(v => Number(v));
    const ans = Number(output);
    const expectAns = sum_of_digit(N, nums);
    expect(expectAns).toBe(ans);
    count++;
  });

  it('#5', () => {
    const [n, arr] = input.split('\r\n');
    const N = Number(n);
    const nums = arr.split(' ').map(v => Number(v));
    const ans = Number(output);
    const expectAns = sum_of_digit(N, nums);
    expect(expectAns).toBe(ans);
    count++;
  });

});