import solution from './MusicVideo';
import { readInput, readOutput } from '../utils';

describe('뮤직비디오', function() {
  it('test case 1', () => {
    const [N, M] = [9, 3];
    const musics = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const ans = solution(N, M, musics);
    expect(ans).toBe(17);
  });
  it('# 1', () => {
    const { N, M, musics } = getInput(1);
    const exp = getOutput(1);
    const ans = solution(N, M, musics);
    expect(ans).toBe(exp);
  });
  it('# 2', () => {
    const { N, M, musics } = getInput(2);
    const exp = getOutput(2);
    const ans = solution(N, M, musics);
    expect(ans).toBe(exp);
  });
  it('# 3', () => {
    const { N, M, musics } = getInput(3);
    const exp = getOutput(3);
    const ans = solution(N, M, musics);
    expect(ans).toBe(exp);
  });
  it('# 4', () => {
    const { N, M, musics } = getInput(4);
    const exp = getOutput(4);
    const ans = solution(N, M, musics);
    expect(ans).toBe(exp);
  });
  it('# 5', () => {
    const { N, M, musics } = getInput(5);
    const exp = getOutput(5);
    const ans = solution(N, M, musics);
    expect(ans).toBe(exp);
  });
});

const getInput = (num: number) => {
  const str = readInput(__dirname, `in${num}.txt`);
  const [[N, M], musics] = str.trim().split('\r\n').map(line => line.trim().split(' ').map(v => Number(v)));
  return { N, M, musics };
};

const getOutput = (num: number) => {
  const ans = readOutput(__dirname, `out${num}.txt`);
  return Number(ans);
};