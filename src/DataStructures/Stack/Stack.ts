class Stack<T> {
  private top: number;
  private stack: T[];

  constructor() {
    this.top = 0;
    this.stack = [];
  }

  push(value: T) {
    this.stack[this.top] = value;
    this.top++;
  }

  pop(): T {
    if (this.top === 0) {
      throw new Error('Stack is Empty');
    }

    this.top--;
    const result = this.stack[this.top];
    this.stack = this.stack.splice(0, this.top);
    return result;
  }

  size() {
    return this.top;
  }

  peek(): T {
    return this.stack[this.top - 1];
  }

  view(output: Function = (value: T) => console.log(value)) {
    for (let i = 0; i < this.top; i++) {
      output(this.stack[i]);
    }
  }
}

export default Stack;
