function first(money: number, costs: number[]) {
  const moneyCosts = [[1, costs[0]], [5, costs[1]], [10, costs[2]], [50, costs[3]], [100, costs[4]], [500, costs[5]]];
  moneyCosts.sort((a, b) => {
    const aValue = a[1] / a[0];
    const bValue = b[1] / b[0];
    return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
  });

  let temp = money;
  let answer = 0;
  for (let i = 0; i < moneyCosts.length; i++) {
    answer += Math.floor(temp / moneyCosts[i][0]) * moneyCosts[i][1];
    temp %= moneyCosts[i][0];
  }


  return answer;
}

export default first;