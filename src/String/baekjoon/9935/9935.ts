// const fs = require('fs');

// const input_enter: string[] = fs.readFileSync(0, 'utf8').toString().split('\n');

// 메모리 초과 되는 로직
function solution(input_enter: string[]): string {
  const [str, explodeStr] = input_enter;
  const regEx = new RegExp(explodeStr);
  const explodedStr = explode(str, regEx);
  return explodedStr === '' ? 'FRULA' : explodedStr;
}

function explode(str: string, regEx: RegExp): string {
  let rStr = str;
  while (regEx.test(rStr)) {
    rStr = rStr.split(regEx).join('');
  }
  return rStr;
}

// console.log(solution(input_enter));

export default solution;