/**
 * 二分查找: 第一个等于给定值
 */
function binaryFindFirstEqual(arr, target) {
  if (arr.length === 0) return -1;

  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      // 相等的情况下 判断这个数是否为第一个, 或者前面那个数是否比target小
      if (mid === 0 || arr[mid - 1] < target) {
        return mid;
      }
      high = mid - 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

/**
 * 二分查找: 最后一个相等的数
 */
function binaryFindLastEqual(arr, target) {
  if (arr.length === 0) return -1 ;

  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return mid;
      }
      low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

/**
 * 二分查找: 第一个大于等于给定值的元素
 */
 function binaryFindFirstEqualOrGraterThan(arr, target) {
    if (arr.length === 0) return -1 ;

    let low = 0;
    let high = arr.length - 1;
    while(low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] >= target) {
        if (mid === 0 || arr[mid - 1] < target) {
          return mid;
        }

        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
 }

 /**
  * 二分查找: 查找最后一个小于等于给定值的元素
  */
 function binaryFindLastEqualOrLessThan(arr, target) {
  if (arr.length === 0) return -1 ;

  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return mid;
      }

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
console.log(binaryFindLastEqualOrLessThan(arr, 88));