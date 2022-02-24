import twoSum from './TwoSum';

describe('two sum 테스트', () => {
  it('case #1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toStrictEqual([0, 1]);
  });
  it('case #2', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toStrictEqual([1, 2]);
  });
  it('case #3', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toStrictEqual([0, 1]);
  });
});
