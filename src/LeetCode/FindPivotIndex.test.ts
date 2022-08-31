import findPivotIndex from './FindPivotIndex';

describe("find pivot index",()=>{
  it('test 1', ()=>{
    const input = [1,7,3,6,5,6];
    const ans = findPivotIndex(input);
    expect(ans).toBe(3);
  })

  it("test 2", ()=>{
    const input = [-1,-1,-1,1,1,1];
    const ans = findPivotIndex(input);
    expect(ans).toBe(-1);
  })

  it("test 3", ()=>{
    const input = [-1,-1,0,0,-1,-1];
    const ans = findPivotIndex(input);
    expect(ans).toBe(2);
  })
})