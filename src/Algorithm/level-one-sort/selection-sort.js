/**
 * 选择排序
 * 1. 原地排序算法
 * 2. 是不稳定的排序算法
 * 3. 时间复杂度: 最好,最坏,平均情况下都为O(n²)
 */
function selectionSort(arr) {
  console.log('排序前: ', arr);
  const length = arr.length;
  if (length <= 1) return;

  let isSorted = true;
  outer: for(let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        isSorted = false;
      }
    }

    if (isSorted) {
      break outer;
    }

    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }

  console.log('排序后: ', arr);
}

// selectionSort([2, 1, 5, 3, 4, 6, 9, 2, 1]);
selectionSort([1, 2, 3, 4, 5]);
