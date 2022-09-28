import { findAnagrams } from './FindAnagrams';

describe('아나그램 테스트', () => {
  it('test # 1', () => {
    const ans = findAnagrams('cbaebabacd', 'abc');
    expect(ans).toStrictEqual([0, 6]);
  });
  it('test # 2', () => {
    const ans = findAnagrams('abab', 'ab');
    expect(ans).toStrictEqual([0, 1, 2]);
  });
});