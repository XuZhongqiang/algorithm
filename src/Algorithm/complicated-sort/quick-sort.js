function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, pivot, left, right) {
  const pivotVal = arr[pivot];
  let startIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex);
      startIndex++;
    }
  }

  swap(arr, startIndex, pivot);
  return startIndex;
}

function quickSort(arr, left, right) {
  if (left < right) {
    const pivot = right;
    const partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1 > left ? partitionIndex - 1 : left);
    quickSort(arr, partitionIndex + 1 < right ? partitionIndex + 1 : right, right);
  }
}

const testArr = [];
 let i = 0;
 while(i < 100) {
   testArr.push(Math.floor(Math.random() * 1000));
   i++;
 }
 console.log('unsorted: ', testArr);
 quickSort(testArr, 0, testArr.length - 1)
 console.log('sorted: ', testArr);