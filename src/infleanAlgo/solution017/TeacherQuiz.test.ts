import teacherQuiz from './TeacherQuiz';
import { readInput, readOutput } from '../utils';

describe('선생님 퀴즈', function() {
  it('#1', () => {
    const input: string = readInput(__dirname, 'in1.txt');
    const output: string = readOutput(__dirname, 'out1.txt');
    const { N, quiz } = getArgument(input);
    const ans = teacherQuiz(N, quiz).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#2', () => {
    const input: string = readInput(__dirname, 'in2.txt');
    const output: string = readOutput(__dirname, 'out2.txt');
    const { N, quiz } = getArgument(input);
    const ans = teacherQuiz(N, quiz).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#3', () => {
    const input: string = readInput(__dirname, 'in3.txt');
    const output: string = readOutput(__dirname, 'out3.txt');
    const { N, quiz } = getArgument(input);
    const ans = teacherQuiz(N, quiz).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#4', () => {
    const input: string = readInput(__dirname, 'in4.txt');
    const output: string = readOutput(__dirname, 'out4.txt');
    const { N, quiz } = getArgument(input);
    const ans = teacherQuiz(N, quiz).join('\r\n');
    expect(ans).toBe(output);
  });
  it('#5', () => {
    const input: string = readInput(__dirname, 'in5.txt');
    const output: string = readOutput(__dirname, 'out5.txt');
    const { N, quiz } = getArgument(input);
    const ans = teacherQuiz(N, quiz).join('\r\n');
    expect(ans).toBe(output);
  });
});

function getArgument(input: string) {
  const lines: string[] = input.split('\r\n');
  const N: number = Number(lines.splice(0, 1));
  const quiz: number[][] = lines.map(line => line.split(' ').map(v => Number(v)));

  return {
    N,
    quiz,
  };
}