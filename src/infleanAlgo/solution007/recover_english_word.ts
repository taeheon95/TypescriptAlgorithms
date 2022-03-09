function recover_english_word(str: string) {
  let newStr = str.toLowerCase();
  let ans = "";
  for(let i=0; i<newStr.length; i++) {
    if(newStr[i] !== ' '){
      ans += newStr[i];
    }
  }
  return ans;
}

export default recover_english_word;