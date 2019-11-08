/**
 * 选择排序
 */
function insertionSort(arr) {
  console.log('排序前: ', arr);
  if (arr.length <= 1) return;

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];

    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > cur) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = cur;
  }

  console.log('排序后: ', arr);
}

insertionSort([2, 1, 5, 3, 4, 6, 9, 2]);