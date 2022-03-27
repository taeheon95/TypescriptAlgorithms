function correctParenthesis(str: string): string {
  const stack: string[] = [];
  let flag: boolean = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        flag = false;
        break;
      }
      stack.pop();
    }
  }
  if (flag && stack.length === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
}

export default correctParenthesis;