import interpolationSearch from './InterpolationSearch';

describe('보간 탐색', () => {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  it('should find', () => {
    const targetNumber = Math.floor(Math.random() * 20 + 1);
    const idx = interpolationSearch(array, targetNumber, 0);
    expect(idx).toBe(targetNumber - 1);
  });
  it('should not find', () => {
    const idx = interpolationSearch(array, 21, 0);
    expect(idx).toBe(-1);
  });
});