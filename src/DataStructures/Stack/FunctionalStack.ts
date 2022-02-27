const Stack = () => {
  let top: number;
  let stack: number[];
  function Stack() {
    top = 0;
    stack = [];
  }

  Stack.prototype.push = function (value: number) {
    stack.push(value);
    top++;
  };

  Stack.prototype.pop = function () {
    if (top === 0) {
      return -1;
    }

    top--;
    const result = stack[top];
    stack = stack.splice(0, top);
    return result;
  };

  Stack.prototype.size = function () {
    return top;
  };

  Stack.prototype.peek = function () {
    return stack[top - 1];
  };

  Stack.prototype.view = function (output: Function = (value: number) => console.log(value)) {
    stack.forEach(value => {
      output(value);
    });
  };

  return Stack;
};

export default Stack;
