/**
 * 插入排序: 三种普通排序算法中最优
 * 1. 是原地排序算法
 * 2. 是稳定的排序算法
 * 3. 时间复杂度:
 *  3.1 最好情况: 数据是有序的, 只需要一次循环, 所以时间复杂度为O(1)
 *  3.2 最好情况: 数据是倒序的, 每次插入都相当于在数组的第一位插入新数据, 所以时间复杂度为O(n²)
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