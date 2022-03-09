function compute_age(rrn: string):string {
  const [first, last] = rrn.split('-');
  const year = 2019;
  let bornYear = Number(first.substring(0, 2)) + 1900;
  Number(last[0]) > 2 && (bornYear += 100);
  const gender = Number(last[0]) % 2 === 0 ? 'W' : 'M';
  return `${year-bornYear+1} ${gender}`;
}

export default compute_age;