/**
 * 归并排序
 */

 function mergeArr(left, right) {
   const tmp = [];
   let leftIndex = 0;
   let rightIndex = 0;

   // 判断2个数组中元素大小，依次插入数组, 直至其中一个数组为空
   while(left.length > leftIndex && right.length > rightIndex) {
     if (left[leftIndex] <= right[rightIndex]) {
       tmp.push(left[leftIndex]);
       leftIndex++;
     } else {
       tmp.push(right[rightIndex]);
       rightIndex++;
     }
   }

   // 合并两个数组中剩余的其他数字
   return tmp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
 }

 function mergeSort(arr) {
   if (arr.length <= 1) return arr;

   const middle = Math.floor(arr.length / 2);
   const left = arr.slice(0, middle);
   const right = arr.slice(middle, arr.length);

   return mergeArr(mergeSort(left), mergeSort(right));
 }

 const testArr = [];
 let i = 0;
 while(i < 100) {
   testArr.push(Math.floor(Math.random() * 1000));
   i++;
 }

 console.log(mergeSort(testArr));