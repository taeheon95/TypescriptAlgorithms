import num_of_prime_number from './num_of_prime_number';
import { readInput, readOutput } from '../utils';

describe('소수의 개수', function() {

  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `in${count}.txt`);
    output = readOutput(__dirname, `out${count}.txt`);
    console.log(count);
  });

  it('#1', () => {
    const N = Number(input);
    const ans = Number(output);
    const solveAns = num_of_prime_number(N);
    expect(solveAns).toBe(ans);
    count++;
  });

  it('#2', () => {
    const N = Number(input);
    const ans = Number(output);
    const solveAns = num_of_prime_number(N);
    expect(solveAns).toBe(ans);
    count++;
  });

  it('#3', () => {
    const N = Number(input);
    const ans = Number(output);
    const solveAns = num_of_prime_number(N);
    expect(solveAns).toBe(ans);
    count++;
  });

  it('#4', () => {
    const N = Number(input);
    const ans = Number(output);
    const solveAns = num_of_prime_number(N);
    expect(solveAns).toBe(ans);
    count++;
  });

  it('#5', () => {
    const N = Number(input);
    const ans = Number(output);
    const solveAns = num_of_prime_number(N);
    expect(solveAns).toBe(ans);
    count++;
  });
});