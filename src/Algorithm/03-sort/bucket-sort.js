/**
 * 桶排序
 * 将数组中的数据按桶进行划分, 相同区间内的划分至一个桶
 * 再对每个桶用插入排序算法(或者快排)进行排序
 * 最后整合所有桶, 得到的就是有序数组
 * @param {*} arr 
 * @param {*} bucketSize: 每个桶的大小
 */
function bucketSort(arr, bucketSize = 5) {
  if (arr.length <= 1) return arr;

  const buckets = createBuckets(arr, bucketSize);
  console.log('sortBuckets(buckets): ', sortBuckets(buckets));
  return sortBuckets(buckets);
}

function createBuckets(arr, bucketSize) {
  // 遍历数组, 找到最大值和最小值
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    if (cur < min) {
      min = cur;
    } else if (cur > max) {
      max = cur;
    }
  }

  // 根据最大值和最小值, 计算桶的个数
  const bucketCount = Math.ceil((max - min + 1) / bucketSize);

  // 建立二维数组, 将桶放入其中
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    const bucketIdx = Math.ceil((arr[i] - min + 1) / bucketSize) - 1;
    buckets[bucketIdx].push(arr[i]);
  }

  return buckets;
}

function sortBuckets(buckets) {
  const sortedArr = [];

  for (let i = 0; i < buckets.length; i++) {
    const bucket = buckets[i];
    if (Array.isArray(bucket)) {
      insertionSort(bucket)
      sortedArr.push(...bucket);
    }
  }

  return sortedArr;
}

function insertionSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {

    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }

      arr[j + 1] = arr[i];
    }
  }
}

let i = 0;
const arr = [];
while(i < 1000) {
  const random = Math.floor(Math.random() * 1000);
  arr.push(random);
  i++;
}

bucketSort(arr, 100);


