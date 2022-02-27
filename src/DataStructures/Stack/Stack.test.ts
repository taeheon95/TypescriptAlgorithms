import Stack from './Stack';

describe('Stack 테스트', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Stack push 테스트', () => {
    stack.push(1);
    expect(stack.top).toBe(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.stack).toStrictEqual([1,2]);
  });

  it('Stack pop 테스트', ()=>{
    stack.push(100);
    expect(stack.top).toBe(1);
    expect(stack.peek()).toBe(100);
    expect(stack.pop()).toBe(100);
  })
});
