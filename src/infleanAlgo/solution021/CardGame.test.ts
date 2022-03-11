import cardGame from './CardGame';
import { readInput, readOutput } from '../utils';

describe('카드게임', function() {
  it('#1', () => {
    const input = readInput(__dirname, 'in1.txt');
    const output = readOutput(__dirname, 'out1.txt');
    const [a, b] = getArgument(input);
    const { A, B, result } = cardGame(a, b);
    expect(`${A} ${B}\r\n${result}`).toBe(output);
  });
  it('#2', () => {
    const input = readInput(__dirname, 'in2.txt');
    const output = readOutput(__dirname, 'out2.txt');
    const [a, b] = getArgument(input);
    const { A, B, result } = cardGame(a, b);
    expect(`${A} ${B}\r\n${result}`).toBe(output);
  });
  it('#3', () => {
    const input = readInput(__dirname, 'in3.txt');
    const output = readOutput(__dirname, 'out3.txt');
    const [a, b] = getArgument(input);
    const { A, B, result } = cardGame(a, b);
    expect(`${A} ${B}\r\n${result}`).toBe(output);
  });
  it('#4', () => {
    const input = readInput(__dirname, 'in4.txt');
    const output = readOutput(__dirname, 'out4.txt');
    const [a, b] = getArgument(input);
    const { A, B, result } = cardGame(a, b);
    expect(`${A} ${B}\r\n${result}`).toBe(output);
  });
  it('#5', () => {
    const input = readInput(__dirname, 'in5.txt');
    const output = readOutput(__dirname, 'out5.txt');
    const [a, b] = getArgument(input);
    const { A, B, result } = cardGame(a, b);
    expect(`${A} ${B}\r\n${result}`).toBe(output);
  });
});

const getArgument = (input: string) => input.split('\r\n').map(v => {
  return v.split(' ').map(value => Number(value));
});