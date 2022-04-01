import solution from './InversionSequence';
import { readInput, readOutput } from '../utils';

describe('inversion sequence', function() {
  let count = 1;

  afterEach(() => {
    count++;
  })

  it(`#1`, () => {
    const { N, seq } = getInput(`in${count}.txt`);
    const answer = getOuput(`out${count}.txt`);
    expect(solution(N, seq)).toStrictEqual(answer);
  })
  it(`#2`, () => {
    const { N, seq } = getInput(`in${count}.txt`);
    const answer = getOuput(`out${count}.txt`);
    expect(solution(N, seq)).toStrictEqual(answer);
  })
  it(`#3`, () => {
    const { N, seq } = getInput(`in${count}.txt`);
    const answer = getOuput(`out${count}.txt`);
    expect(solution(N, seq)).toStrictEqual(answer);
  })
  it(`#4`, () => {
    const { N, seq } = getInput(`in${count}.txt`);
    const answer = getOuput(`out${count}.txt`);
    expect(solution(N, seq)).toStrictEqual(answer);
  })
  it(`#5`, () => {
    const { N, seq } = getInput(`in${count}.txt`);
    const answer = getOuput(`out${count}.txt`);
    expect(solution(N, seq)).toStrictEqual(answer);
  })
});

const getInput = (fileName: string) => {
  const input = readInput(__dirname, fileName);
  const [N, seq] = input.split('\r\n');
  const sequence = seq.trim().split(' ').map(v => Number(v));
  return { N: Number(N), seq: sequence };
};

const getOuput = (fileName: string) => {
  return readOutput(__dirname, fileName).trim().split(' ').map(v => Number(v));
};