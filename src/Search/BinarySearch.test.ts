import binarySearch from './BinarySearch';

describe('이진 탐색', () => {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  it('성공', () => {
    const targetNumber = Math.floor(Math.random() * 20 + 1);
    const idx = binarySearch(array, targetNumber, 0);
    expect(idx).toBe(targetNumber - 1);
  });
  it('실패', () => {
    const idx = binarySearch(array, 21, 0);
    expect(idx).toBe(-1);
  });
});

