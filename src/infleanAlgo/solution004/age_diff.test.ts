import age_diff from './age_diff';
import fs from 'fs';
import { readInput, readOutput } from '../utils';

describe('나이 차이', () => {
  let input: string;
  let output: string;
  let count: number = 1;

  beforeEach(() => {
    input = readInput(__dirname, `/in${count}.txt`).trim();
    output = readOutput(__dirname, `/out${count}.txt`).trim();
    console.log(count);
  });

  it('test case 1', () => {
    const [N, arr] = input.split('\r\n');
    const nNum = Number(N);
    const ageArr = arr.split(' ').map((age) => Number(age));
    const ans = Number(output);
    expect(age_diff(nNum, ageArr)).toBe(ans);
    count++;
  });
  it('test case 2', () => {
    const [N, arr] = input.split('\r\n');
    const nNum = Number(N);
    const ageArr = arr.split(' ').map((age) => Number(age));
    const ans = Number(output);
    expect(age_diff(nNum, ageArr)).toBe(ans);
    count++;
  });
  it('test case 3', () => {
    const [N, arr] = input.split('\r\n');
    const nNum = Number(N);
    const ageArr = arr.split(' ').map((age) => Number(age));
    const ans = Number(output);
    expect(age_diff(nNum, ageArr)).toBe(ans);
    count++;
  });
  it('test case 4', () => {
    const [N, arr] = input.split('\r\n');
    const nNum = Number(N);
    const ageArr = arr.split(' ').map((age) => Number(age));
    const ans = Number(output);
    expect(age_diff(nNum, ageArr)).toBe(ans);
    count++;
  });
  it('test case 5', () => {
    const [N, arr] = input.split('\r\n');
    const nNum = Number(N);
    const ageArr = arr.split(' ').map((age) => Number(age));
    const ans = Number(output);
    expect(age_diff(nNum, ageArr)).toBe(ans);
    count++;
  });
});