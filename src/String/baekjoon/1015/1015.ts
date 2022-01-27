import * as fs from 'fs';

// const input_enter: string[] = fs.readFileSync(0, 'utf8').toString().split('\n');

function solution(N: string, arrP: string) {
  const n: number = Number(N);
  const arr_p: number[][] = arrP.split(' ').map((v, i) => [Number(v), i]);
  arr_p.sort((a, b) => {
    return a[0] - b[0];
  });
  const answer = Array.from({ length: arr_p.length }, (v, i) => 0);
  for (let i = 0; i < answer.length; i++) {
    answer[arr_p[i][1]] = i;
  }
  return answer.join(' ');
}

// console.log(solution(input_enter[0], input_enter[1]));

export default solution;