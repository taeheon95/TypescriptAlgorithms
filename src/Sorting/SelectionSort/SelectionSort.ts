function selectionSort(arr: number[], comparator?: (a: number, b: number) => boolean): number[] {
  const comp = comparator ? comparator : (a: number, b: number) => {
    return a > b;
  };
  for (let i = 0; i < arr.length - 1; i++) {
    const temp = arr[i];
    let j = i + 1;
    let min = arr[j];
    let minIdx = j;
    while (j < arr.length) {
      if (comp(min, arr[j])) {
        min = arr[j];
        minIdx = j;
      }
      j++;
    }
    if (comp(arr[i], min)) {
      arr[i] = min;
      arr[minIdx] = temp;
    }
  }
  return arr;
}


export default selectionSort;