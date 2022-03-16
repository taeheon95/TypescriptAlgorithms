function weightOfCH(chemical: string) {
  let hidx = 0, c = 0, h = 0;
  const weightOfC = 12, weightOfH = 1;

  for (let i = 0; i < chemical.length; i++) {
    if (chemical[i] === 'H') {
      hidx = i;
    }
  }

  for (let i = 1; i < hidx; i++) {
    let temp = chemical.charCodeAt(i) - '0'.charCodeAt(0);
    c *= 10;
    c += temp;
  }

  for (let i = hidx + 1; i < chemical.length; i++) {
    let temp = chemical.charCodeAt(i) - '0'.charCodeAt(0);
    h *= 10;
    h += temp;
  }

  if (c === 0) {
    c = 1;
  }
  if (h === 0) {
    h = 1;
  }

  return c * weightOfC + h * weightOfH;
}

export default weightOfCH;