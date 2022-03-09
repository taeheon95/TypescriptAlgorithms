function get_nums(str: string): string {
  let num: string | number = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      num += str[i];
    }
  }
  num = Number(num);
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return `${num}\r\n${count}`;
}

export default get_nums;