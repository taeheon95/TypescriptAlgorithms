function quickSort(arr: number[], comparator?: (a: number, b: number) => boolean, start: number = 0, end: number = arr.length - 1): number[] | undefined {
  const comp = comparator ? comparator : (a: number, b: number) => {
    return a > b;
  };
  if (arr.length > 1) {
    const partitionIdx = partition(arr, comp, start, end);
    if (start < partitionIdx - 1) {
      quickSort(arr, comp, start, partitionIdx - 1);
    }
    if (end > partitionIdx) {
      quickSort(arr, comp, partitionIdx, end);
    }
  }
  return arr;
}

function partition(arr: number[], comp: (a: number, b: number) => boolean, start: number = 0, end: number = arr.length - 1): number {
  const pivot = arr[Math.floor((start + end) / 2)];
  while (start <= end) {
    while (comp(pivot, arr[start])) {
      start++;
    }
    while (comp(arr[end], pivot)) {
      end--;
    }
    if (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return start;
}

export default quickSort;