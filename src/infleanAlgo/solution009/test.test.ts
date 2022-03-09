import every_measure from './every_measure';
import { readInput, readOutput } from '../utils';

describe('모두의 약수', function() {

  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `/in${count}.txt`).trim();
    output = readOutput(__dirname, `/out${count}.txt`).trim();
    console.log(count);
  });


  it('test case #1', () => {
    const N = Number(input);
    const ans = output.split(' ').map((v)=>Number(v))
    expect(every_measure(N)).toStrictEqual(ans);
    count++;
  });

  it('test case #2', () => {
    const N = Number(input);
    const ans = output.split(' ').map((v)=>Number(v))
    expect(every_measure(N)).toStrictEqual(ans);
    count++;
  });

  it('test case #3', () => {
    const N = Number(input);
    const ans = output.split(' ').map((v)=>Number(v))
    expect(every_measure(N)).toStrictEqual(ans);
    count++;
  });

  it('test case #4', () => {
    const N = Number(input);
    const ans = output.split(' ').map((v)=>Number(v))
    expect(every_measure(N)).toStrictEqual(ans);
    count++;
  });

  it('test case #5', () => {
    const N = Number(input);
    const ans = output.split(' ').map((v)=>Number(v))
    expect(every_measure(N)).toStrictEqual(ans);
    count++;
  });
});