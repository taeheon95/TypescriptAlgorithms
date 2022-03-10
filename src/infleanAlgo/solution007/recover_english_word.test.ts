import recover_english_word from './recover_english_word';
import { readInput, readOutput } from '../utils';

describe('영어 단어 복구', function() {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `/in${count}.txt`).trim();
    output = readOutput(__dirname, `/out${count}.txt`).trim();
    console.log(count);
  });

  it('#1', () => {
    expect(recover_english_word(input)).toBe(output);
    count++;
  });
  it('#2', () => {
    expect(recover_english_word(input)).toBe(output);
    count++;
  });
  it('#3', () => {
    expect(recover_english_word(input)).toBe(output);
    count++;
  });
  it('#4', () => {
    expect(recover_english_word(input)).toBe(output);
    count++;
  });
  it('#5', () => {
    expect(recover_english_word(input)).toBe(output);
    count++;
  });


});