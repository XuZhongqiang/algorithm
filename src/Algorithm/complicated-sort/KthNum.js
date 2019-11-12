/**
 * 第k大的数
 * @param {Array} arr 
 * @param {Number} k 
 */
function kthNum(arr, k) {
  const len = arr.length;
  if (k > len) return -1;

  let p = partition(arr, 0, len - 1);
  while(p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }

  return arr[p];
}

function partition(arr, start, end) {
  let i = start;
  let pivot = arr[end];

  for (let j = i; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }

  swap(arr, i, end);

  return i;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(kthNum([5,1,3,6,4,8,8,2, 3, 3], 5));