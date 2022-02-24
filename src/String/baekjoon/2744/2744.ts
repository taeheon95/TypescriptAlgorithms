// import * as fs from 'fs';

// const input_enter: string[] = fs.readFileSync(0, 'utf8').toString().split(' ');

function solution(str: string) {
  let rStr = '';
  for (let i = 0; i < str.length; i++) {
    // 대문자일 때
    if (str[i] === str[i].toUpperCase()) {
      rStr = rStr.concat(str[i].toLowerCase());
    } else {
      rStr = rStr.concat(str[i].toUpperCase());
    }
  }
  return rStr;
}

// console.log(solution(input_enter[0]));

export default solution;