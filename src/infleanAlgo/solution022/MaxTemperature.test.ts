import maxTemperature from './MaxTemperature';
import { readInput, readOutput } from '../utils';

const getArgument = (input: string) => input.split('\r\n').map(v => {
  return v.split(' ').map(value => Number(value));
});

test.each(
  Array.from({ length: 5 }, (_, i) => [`in${i + 1}.txt`, `out${i + 1}.txt`]))
(`온도의 최대값 인풋 파일 : %s, 아웃풋 파일 : %s `, (inFile, outFile) => {
  const input = readInput(__dirname, inFile);
  const output = readOutput(__dirname, outFile);
  const [[N, K], days] = getArgument(input);
  const ans = maxTemperature(N, K, days);
  expect(ans).toBe(Number(output));
});

