function sum_of_nature(start:number, end:number) {
  let ans:string = `${start}`;
  let sum = start;
  for(let i=start+1; i<=end; i++){
    ans += ` + ${i}`;
    sum += i;
  }
  ans += ` = ${sum}`;
  return ans;
}

export default sum_of_nature;