interface AlphaObject {
  [key: string]: number;
}

function anagram(first: string, second: string): string {

  const upperAlphaCodeArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const lowerAlphaCodeArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

  const alphaObjectFirst: AlphaObject = {};
  const alphaObjectSecond: AlphaObject = {};
  [...upperAlphaCodeArr, ...lowerAlphaCodeArr].forEach((v) => {
    alphaObjectFirst[v] = 0;
    alphaObjectSecond[v] = 0;
  });

  for (let i = 0; i < first.length; i++) {
    alphaObjectFirst[first[i]]++;
  }

  for (let i = 0; i < second.length; i++) {
    alphaObjectSecond[second[i]]++;
  }

  let ans: string = 'YES';
  for (let alpha in alphaObjectFirst) {
    if (alphaObjectFirst[alpha] !== alphaObjectSecond[alpha]) {
      ans = 'NO';
      break;
    }
  }


  return ans;
}

export default anagram;