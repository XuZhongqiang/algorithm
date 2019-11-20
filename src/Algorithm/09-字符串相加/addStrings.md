给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

```!
num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
```

解法
```js
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
```
