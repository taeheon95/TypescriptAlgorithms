import isSubsequence from './IsSubsequence';

describe("is subsequence", ()=>{
  it('test1', ()=>{
    const s = 'abc';
    const t = 'ahbgdc';
    const ans = isSubsequence(s, t);
    expect(ans).toBe(true);
  })

  it('test2', ()=>{
    const s = 'axc';
    const t = 'ahbgdc';
    const ans = isSubsequence(s, t);
    expect(ans).toBe(false);
  })

  it('test3', ()=> {
    const s = '';
    const t = '';
    const ans = isSubsequence(s, t);
    expect(ans).toBe(true);
  })
})