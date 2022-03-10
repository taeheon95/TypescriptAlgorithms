import { readInput, readOutput } from '../utils';
import get_nums from './get_nums'

describe('숫자만 추출', function() {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `/in${count}.txt`).trim();
    output = readOutput(__dirname, `/out${count}.txt`).trim();
    console.log(count);
  });

  it("#1", ()=>{
    expect(get_nums(input)).toBe(output);
    count++;
  })
  it("#2", ()=>{
    expect(get_nums(input)).toBe(output);
    count++;
  })
  it("#3", ()=>{
    expect(get_nums(input)).toBe(output);
    count++;
  })
  it("#4", ()=>{
    expect(get_nums(input)).toBe(output);
    count++;
  })
  it("#5", ()=>{
    expect(get_nums(input)).toBe(output);
    count++;
  })
});