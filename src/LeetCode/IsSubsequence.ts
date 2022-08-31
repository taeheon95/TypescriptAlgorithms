function isSubsequence(s: string, t: string): boolean {
  let ans = false;

  if(s.length > t.length) {
    return ans;
  }

  let sidx = 0;
  let tidx = 0;

  if(s.length === 0 && t.length === 0) {
    return true;
  }

  for(tidx; tidx <= t.length; tidx++) {
    if(s[sidx] === t[tidx]) {
      sidx++;
    }
    if(sidx === s.length) {
      ans = true;
      break;
    }
  }

  return ans;
}

export default isSubsequence;