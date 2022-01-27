function mergeSort(
  arr: Array<number>,
  comparator?: (a: number, b: number) => boolean,
): Array<number> {
  const comp = comparator
    ? comparator
    : (a: number, b: number) => {
      return a > b;
    };
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(comp, mergeSort(left), mergeSort(right));
}

function merge(comp: (a: number, b: number) => boolean, left: number[], right: number[]): number[] {
  const arr: number[] = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx + rightIdx < left.length + right.length) {
    const lItem = left[leftIdx];
    const rItem = right[rightIdx];

    if (lItem === null || lItem === undefined) {
      arr.push(rItem);
      rightIdx++;
    } else if (rItem === null || rItem === undefined) {
      arr.push(lItem);
      leftIdx++;
    } else if (comp(rItem, lItem)) {
      arr.push(lItem);
      leftIdx++;
    } else {
      arr.push(rItem);
      rightIdx++;
    }
  }

  return arr;
}

export default mergeSort;
