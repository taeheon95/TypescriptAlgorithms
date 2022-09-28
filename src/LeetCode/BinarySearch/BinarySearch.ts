function search(nums: number[], target: number): number {
  return binarySearch(nums, target)
}

function binarySearch(array: number[], target: number, start: number = 0, end: number = array.length - 1): number {
  if (start > end) return -1;
  const mid: number = Math.floor((start + end) / 2);
  return target === array[mid]
    ? mid
    : target < array[mid]
      ? binarySearch(array, target, start, mid - 1)
      : binarySearch(array, target, mid + 1, end);
}
