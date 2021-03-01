/**
 * 第k大的数
 * @param {Array} arr 
 * @param {Number} k 
 */
function swap(arr,i,j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, left, right) {
  const pivot = arr[left];
  let startIdx = left;
  for (let i = startIdx + 1; i <= right; i++) {
      if (arr[i] < pivot) {
          startIdx++;
          swap(arr, i, startIdx);
      }
  }

  swap(arr, startIdx, left);
  return startIdx;
}

var findKthLargest = function(nums, k) {
  const target = nums.length - k;
  let left = 0;
  let right = nums.length - 1;
  while(true) {
      let ret = partition(nums, left, right);
      if (ret === target) {
          return nums[ret];
      } else if (ret < target) {
          left = ret + 1;
      } else {
          right = ret - 1;
      }
  }
};

console.log(findKthLargest([5,1,3,6,4,8,8,2, 3, 3], 5));