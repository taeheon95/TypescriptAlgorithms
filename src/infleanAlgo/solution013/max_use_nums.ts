function max_use_nums(nums: string) {
  const list = Array.from({ length: 10 }, (_) => 0);
  for (let i = 0; i < nums.length; i++) {
    list[Number(nums[i])]++;
  }
  let maxIdx = 0;
  list.forEach((v, i) => {
    if (v >= list[maxIdx]) maxIdx = i;
  });
  return maxIdx;
}

export default max_use_nums;