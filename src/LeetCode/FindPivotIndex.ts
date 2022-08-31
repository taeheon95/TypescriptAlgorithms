function pivotIndex(nums: number[]): number {
  let ans:number = -1;
  let leftSum:number = 0;
  let rightSum:number = nums.reduce((acc, cur)=>{
    return acc += cur;
  }, 0)
  let i = 0;
  for(i; i<nums.length; i++) {
    rightSum -= nums[i];
    if(leftSum === rightSum){
      ans = i;
      break;
    }
    leftSum += nums[i];
  }
  return ans
}

export default pivotIndex;