import solution from './CorrectParenthesis';
import { readInput, readOutput } from '../utils';

describe('올바른 괄호(stack)', function() {
  it('test 1', () => {
    const str = '(()(()))(()';
    const ans = solution(str);
    expect(ans).toBe('NO');
  });
  it('test 2', () => {
    const str = '()()(()())';
    const ans = solution(str);
    expect(ans).toBe('YES');
  });
  it('# 1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const ans = solution(input);
    expect(ans).toBe(output);
  });
  it('# 2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const ans = solution(input);
    expect(ans).toBe(output);
  });
  it('# 3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt');
    const ans = solution(input);
    expect(ans).toBe(output);
  });
  it('# 4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt');
    const ans = solution(input);
    expect(ans).toBe(output);
  });
  it('# 5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt');
    const ans = solution(input);
    expect(ans).toBe(output);
  });
});