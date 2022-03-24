function mergingTwoArray(arr1: number[], arr2: number[]) {
  const ansArr = Array.from({ length: arr1.length + arr2.length }, () => 0);
  let i = 0, j = 0, k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ansArr[k++] = arr1[i++];
    } else {
      ansArr[k++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    ansArr[k++] = arr1[i++];
  }

  while (j < arr2.length) {
    ansArr[k++] = arr2[j++];
  }

  return ansArr;
}

export default mergingTwoArray;