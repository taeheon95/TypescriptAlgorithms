function isIsomorphic(s: string, t: string): boolean {
  let ans = true;
  let sObj = {};
  let tObj = {}

  for(let i=0; i<s.length; i++) {
    // @ts-ignore
    if(sObj[s[i]] && sObj[s[i]] === t[i]) {
      // @ts-ignore
    } else if(sObj[s[i]] === null || sObj[s[i]] === undefined) {
      // @ts-ignore
      sObj[s[i]] = t[i];

    } else {
      ans = false;
      break;
    }
    // @ts-ignore
    if(tObj[t[i]] && tObj[t[i]] === s[i]) {
      // @ts-ignore
    } else if(tObj[t[i]] === null || tObj[t[i]] === undefined) {
      // @ts-ignore
      tObj[t[i]] = s[i];
    } else {
      ans = false;
      break;
    }
  }

  return ans;
};

export default isIsomorphic;