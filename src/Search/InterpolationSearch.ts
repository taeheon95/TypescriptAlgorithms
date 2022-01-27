function interpolationSearch(arr: number[], target: number, start: number, end: number = arr.length - 1): number {
  const position = start + Math.floor((target - arr[start]) * (end - start) / (arr[end] - arr[start]));
  if (start >= end || arr[position] === undefined) {
    return -1;
  }
  return target === arr[position]
    ? position
    : target > arr[position]
      ? interpolationSearch(arr, target, position + 1, end)
      : interpolationSearch(arr, target, start, position - 1);
}

export default interpolationSearch;