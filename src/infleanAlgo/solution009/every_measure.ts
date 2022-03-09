function every_measure(N: number) {
  const arr: number[] = Array.from({ length: N + 1 }, (_, i) => 1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 2; j*i < arr.length; j++) {
      arr[i * j] += 1;
    }
  }
  arr.splice(1, 1);
  return arr;
}

export default every_measure;