function rot13(str: string) {
  const response: string[] = [];
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    const char = str.charCodeAt(i);

    if (char < 65 || (char > 90 && char < 97) || char > 122) {
      response.push(str.charAt(i));
    } else if ((char > 77 && char <= 90) || (char > 109 && char <= 122)) {
      response.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      response.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return response.join('');
}

export { rot13 };