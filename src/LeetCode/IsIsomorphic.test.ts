import isIsomorphic from './IsIsomorphic';

describe('동형 문자열', () => {
  it('test 1', () => {
    const s = 'egg';
    const t = 'add';
    const ans = isIsomorphic(s, t);
    expect(ans).toBe(true);
  });
  it('test 2', () => {
    const s = 'foo';
    const t = 'bar';
    const ans = isIsomorphic(s, t);
    expect(ans).toBe(false);
  });
  it('test 3', () => {
    const s = 'paper';
    const t = 'title';
    const ans = isIsomorphic(s, t);
    expect(ans).toBe(true);
  });
  it('test 4', () => {
    const s = 'badc';
    const t = 'baba';
    const ans = isIsomorphic(s, t);
    expect(ans).toBe(false);
  })
});