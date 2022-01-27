function bubbleSort(array: number[], comparator?: (a: number, b: number) => boolean): number[] {
  const comp = comparator ? comparator : (a: number, b: number) => {
    return a > b;
  };
  for (let i: number = array.length - 1; i > 0; i--) {
    for (let j: number = 0; j < i; j++) {
      if (comp(array[j], array[j + 1])) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

export default bubbleSort;