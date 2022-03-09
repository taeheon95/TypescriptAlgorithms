import "fs";

function m_nums_sum(n:number, m:number):number {
  let sum = 0;
  for(let i=m; i<=n; i+=m){
    sum += i;
  }
  return sum;
}

export default m_nums_sum;