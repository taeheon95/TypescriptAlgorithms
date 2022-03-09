function correct_bracket(input: string): string {
  let count: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      break;
    }
  }
  if(count !== 0) return 'NO';
  return 'YES';
}

export default correct_bracket;