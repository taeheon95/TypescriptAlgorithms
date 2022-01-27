function insertionSort(arr: number[], comparator?: (a: number, b: number) => boolean) {
  const comp = comparator ? comparator : (a: number, b: number) => {
    return a > b;
  };
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && comp(arr[j], temp)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

export default insertionSort;