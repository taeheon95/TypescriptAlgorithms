function solution(purchase: string[]): number[] {
  // 0, 1, 2, 3, 4
  // 등급별 기간 브론즈, 실버, 골드, 플래티넘, 다이아몬드
  const answer: number[] = Array.from({ length: 5 }, () => {
    return 0;
  });
  const dateArr: Date[] = [];
  const moneyArr: number[] = [];
  const spendMoneyArr: number[] = Array.from({ length: 365 }, () => 0);
  const startDate: Date = new Date('2019/01/01');

  purchase.forEach((p) => {
    const [date, money] = p.split(' ');
    dateArr.push(new Date(date));
    moneyArr.push(Number(money));
  });

  dateArr.forEach((d, idx) => {
    const dateNum = getDateDiff(d, startDate);
    for (let i = dateNum; i < dateNum + 30 && i < spendMoneyArr.length; i++) {
      spendMoneyArr[i] += moneyArr[idx];
    }
  });

  for (let i = 0; i < spendMoneyArr.length; i++) {
    if (spendMoneyArr[i] < 10000) {
      answer[0] += 1;
    } else if (spendMoneyArr[i] < 20000 && spendMoneyArr[i] >= 10000) {
      answer[1] += 1;
    } else if (spendMoneyArr[i] < 50000 && spendMoneyArr[i] >= 20000) {
      answer[2] += 1;
    } else if (spendMoneyArr[i] < 100000 && spendMoneyArr[i] >= 50000) {
      answer[3] += 1;
    } else {
      answer[4] += 1;
    }
  }

  return answer;
}

const getDateDiff = (d1: string | Date, d2: string | Date) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 3600 * 24));
};

export default solution;