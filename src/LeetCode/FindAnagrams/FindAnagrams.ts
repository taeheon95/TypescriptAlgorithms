function findAnagrams(s: string, p: string): number[] {
  const ans: number[] = [];
  const alpha: number[] = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < p.length; i++) {
    alpha[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    alpha[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }



  for (let i = 0; i < s.length - p.length + 1; i++) {
    let isAnagram: boolean = true;
    for (let j = 0; j < 26; j++) {
      if (alpha[j] != 0) isAnagram = false;
    }
    if (isAnagram) {
      ans.push(i);
    }
    alpha[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    alpha[s.charCodeAt(i + p.length) - 'a'.charCodeAt(0)]++;
  }

  return ans;
}

export { findAnagrams };