function BubbleSort(arr) {
  console.log('排序之前: ', arr);
  const length = arr.length;
  if (length <= 1) return;
  
  outer: for (let i = 0; i < length; i++) {
    console.log('经历一次循环');

    /**
     * isOrdered: 代表当前数组是否有序
     * 1. 一旦发生数字交换, 那么说明当前数组是无须的;
     * 2. 反之, 则说明数组有序, 则直接跳出循环
     */
    let isOrdered = true;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
        isOrdered = false;
      }
    }
    if (isOrdered) break outer;
  }

  console.log('排序之后: ', arr);
}

/** console
 * 排序之前:  (5) [5, 4, 3, 2, 1]
 * 打印5次: '经历一次循环'
 * 排序之后:  (5) [1, 2, 3, 4, 5]
 */
BubbleSort([5, 4, 3, 2, 1]);

/** console
 * 排序之前:  (5) [1, 2, 3, 4, 5]
 * 打印一次: '经历一次循环'
 * 排序之后:  (5) [1, 2, 3, 4, 5]
 */
BubbleSort([1, 2, 3, 4, 5]);

