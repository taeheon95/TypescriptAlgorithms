import Stack from './Stack';

describe('Stack 테스트', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Stack push 테스트', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('Stack pop 테스트', () => {
    stack.push(100);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(100);
    expect(stack.pop()).toBe(100);
  });
});
