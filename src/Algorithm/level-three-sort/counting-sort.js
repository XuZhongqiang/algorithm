/**
 * 基数排序
 */

 function countingSort(arr) {
   if (arr.length <= 1) return arr;

   const max = findMax(arr);
   /**
    * counts数组: 下标对应元素的值, 值对应元素个数
    */
   const counts = new Array(max + 1);

   for (let i = 0; i < arr.length; i++) {
     const cur = arr[i];
     if (counts[cur]) {
       counts[cur]++;
     } else {
       counts[cur] = 1;
     }
   }

   let sortedArr = [];
   // counts数组中, 下标对应的是元素的值, 下标对应的值是元素个数
   counts.forEach((count, value) => {
     if (count) {
       sortedArr = sortedArr.concat(new Array(count).fill(value));
     }
   });

   console.log('sortedArr: ', sortedArr)
   return sortedArr;
 }

 function findMax(arr) {
   return arr.reduce((prev, cur) => cur > prev ? cur : prev);
 }

 let i = 0;
 const arr = [];
 while(i < 1000) {
   const random = Math.floor(Math.random() * 1000);
   arr.push(random);
   i++;
 }

 countingSort(arr);