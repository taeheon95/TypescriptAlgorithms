function longestPalindrome(s: string): number {
  const alpha = Array.from({ length: 52 }, () => 0);
  const aCodeLower = 'a'.charCodeAt(0);
  const aCodeUpper = 'A'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0);
    if (charCode >= aCodeLower) {
      alpha[charCode - aCodeLower + 26]++;
    } else {
      alpha[charCode - aCodeUpper]++;
    }
  }

  let ans = 0;
  let hasOdd = false;
  for (let i = 0; i < 52; i++) {
    if (alpha[i] % 2 === 0) {
      ans += alpha[i];
    } else {
      hasOdd = true;
      ans += alpha[i]-1;
    }
  }

  if(hasOdd) ans++;

  return ans;
}

export default longestPalindrome;