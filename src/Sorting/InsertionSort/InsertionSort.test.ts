import insertionSort from './InsertionSort';

describe('삽입 정렬', () => {
  let array: number[];
  beforeEach(() => {
    array = Array.from(
      { length: 100 }, (v, i) => {
        return Math.floor(Math.random() * 100 + 1);
      });
  });
  it('정렬 함수 없이 정렬하기', () => {
    const sortedArray = insertionSort([...array]);
    expect(sortedArray).toStrictEqual(array.sort((a, b) => {
      return a - b;
    }));
  });
  it('정렬 함수 넣고 정렬하기(오름차순)', () => {
    const sortedArray = insertionSort([...array], (a: number, b: number) => {
      return a > b;
    });
    expect(sortedArray).toStrictEqual(array.sort((a: number, b: number) => {
      return a - b;
    }));
  });
  it('정렬 함수 넣고 정렬하기(내림차순)', () => {
    const sortedArray = insertionSort([...array], (a: number, b: number) => {
      return a < b;
    });
    expect(sortedArray).toStrictEqual(array.sort((a: number, b: number) => {
      return b - a;
    }));
  });
});