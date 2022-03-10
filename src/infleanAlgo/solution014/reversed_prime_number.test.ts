import reversed_prime_number from './reversed_prime_number';
import { readInput, readOutput } from '../utils';

describe('뒤집은 소수', function() {

  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `/in${count}.txt`).trim();
    output = readOutput(__dirname, `/out${count}.txt`).trim();
    console.log(count);
  });

  it('#1', () => {
    const [n, nums] = input.split('\r\n');
    const N = Number(n);
    const numList = nums.split(' ').map(v => Number(v));
    const expectNumList = output.split(' ').map(v => Number(v));
    const ans = reversed_prime_number(N, numList);
    expect(ans).toStrictEqual(expectNumList);
    count++;
  });

  it('#2', () => {
    const [n, nums] = input.split('\r\n');
    const N = Number(n);
    const numList = nums.split(' ').map(v => Number(v));
    const expectNumList = output.split(' ').map(v => Number(v));
    const ans = reversed_prime_number(N, numList);
    expect(ans).toStrictEqual(expectNumList);
    count++;
  });
  it('#3', () => {
    const [n, nums] = input.split('\r\n');
    const N = Number(n);
    const numList = nums.split(' ').map(v => Number(v));
    const expectNumList = output.split(' ').map(v => Number(v));
    const ans = reversed_prime_number(N, numList);
    expect(ans).toStrictEqual(expectNumList);
    count++;
  });
  it('#4', () => {
    const [n, nums] = input.split('\r\n');
    const N = Number(n);
    const numList = nums.split(' ').map(v => Number(v));
    const expectNumList = output.split(' ').map(v => Number(v));
    const ans = reversed_prime_number(N, numList);
    expect(ans).toStrictEqual(expectNumList);
    count++;
  });
  it('#5', () => {
    const [n, nums] = input.split('\r\n');
    const N = Number(n);
    const numList = nums.split(' ').map(v => Number(v));
    const expectNumList = output.split(' ').map(v => Number(v));
    const ans = reversed_prime_number(N, numList);
    expect(ans).toStrictEqual(expectNumList);
    count++;
  });
});