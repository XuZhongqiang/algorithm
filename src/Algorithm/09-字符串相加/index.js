/**
 * 两个字符串数字相加
 * @param {*} numStr1 
 * @param {*} numStr2 
 */
function addStrings(numStr1, numStr2) {
  let i = numStr1.length - 1;
  let j = numStr2.length - 1;
  let carry = 0;
  let ret = '';

  while(i >= 0 || j >= 0) {
    let sum = 0;
    const n1 = i >= 0 ? numStr1[i] - '0' : 0;
    const n2 = j >= 0 ? numStr2[j] - '0' : 0;

    sum = n1 + n2 + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    ret = sum + ret;
    i--;
    j--;
  }

  return carry ? carry + ret : ret;
}