
function threeSum(nums) {
  const ret = [];
  // 按照从小到大排序
  nums.sort((a, b) => a - b);

  const length = nums.length;
  outer:for (let i = 0; i < length - 2; i++) {

    // 如果左右数字相等, 那么直接跳过
    if ( i > 0 && nums[i] === nums[i - 1]) continue outer;

    const cur = nums[i];
    let left = i + 1;
    let right = length - 1;

    // 如果第一个数>0, 那么后续组合相加必然不会为0
    if (cur > 0) return ret;

    inner:while(left < right) {
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        ++left;
        continue inner;
      }

      if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
        --right;
        continue inner;
      }
      const sum = cur + nums[left] + nums[right];
      console.log(cur, nums[left], nums[right]);
      if (sum < 0) {
        ++left;
      } else if (sum === 0) {
        ret.push([cur, nums[left], nums[right]]);
        ++left;
        --right;
        continue inner;
      } else {
        --right;
      }
    }
  }

  return ret;
}

threeSum([-1,0,1,2,-1,-4]);