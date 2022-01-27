/**
 *
 * @param array 정렬된 배열
 * @param target 정렬된 배열에서 데이터를 찾아서 리턴하는 함수
 * @param start 탐색을 시작할 위치
 * @param end 탐색의 종료될 위치
 * @author 여태헌
 * @description 이진 탐색 알고리즘
 * @return 타겟의 인덱스 반환, 없을 경우 -1 반환
 */
function binarySearch<T>(array: T[], target: T, start: number = 0, end: number = array.length - 1): number {
  if (start > end) return -1;
  const mid: number = Math.floor((start + end) / 2);
  return target === array[mid]
    ? mid
    : target < array[mid]
      ? binarySearch(array, target, start, mid - 1)
      : binarySearch(array, target, mid + 1, end);
}

export default binarySearch;