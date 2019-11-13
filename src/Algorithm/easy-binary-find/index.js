/**
 * 二分查找
 * @param {*} arr 
 * @param {*} target 
 * 要求: 数组必须有序, 且数组内元素不重复
 */
function binaryFind(arr, target) {
  if (arr.length === 0) return -1;

  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let i = 0;
let arr = [];
while(i < 1000) {
  const random = Math.floor(Math.random() * 1000);
  arr.push(random);
  i++;
}

arr = Array.from(new Set(arr));

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, pivot, left, right) {
  const pivotVal = arr[pivot];
  let curIdx = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, curIdx);
      curIdx++;
    }
  }

  swap(arr, pivot, curIdx);

  return curIdx;
}

function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = right;
    const partitionIdx = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIdx - 1 > left ? partitionIdx - 1 : left);
    quickSort(arr, partitionIdx + 1 < right ? partitionIdx + 1 : right , right)
  }
}
quickSort(arr, 0, arr.length - 1);
console.log(arr);
console.log(binaryFind(arr, arr[18]));