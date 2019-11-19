编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:
```!
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:
```!
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

说明:
所有输入只包含小写字母 a-z 。

用到了分治的思想, 这种解法空间复杂度会比较高, 但是在足够的内存下, 用空间换时间还是可行的.
![分治](https://pic.leetcode-cn.com/8bb79902c99719a923d835b9265b2dea6f20fe7f067f313cddcf9dd2a8124c94-file_1555694229984)

```js
function getCommonPrefix(strs) {
  if (!Array.isArray(strs) || strs.length <= 1) return strs[0] || '';

  const [str1, str2] = strs;
  if (!str1 || !str2) return '';

  let i = 0;
  for (i; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    if (char1 !== char2) {
      break;
    }
  }
  return str1.slice(0, i);
}

function getLongestCommonPrefix(strs) {
  if (!Array.isArray(strs)) return '';

  if (strs.length <= 2) {
    return getCommonPrefix(strs);
  }
  const mid = Math.floor(strs.length / 2);
    
  const left = strs.slice(0, mid);
  const right = strs.slice(mid);
  return getLongestCommonPrefix([getLongestCommonPrefix(left), getLongestCommonPrefix(right)]);
}
```
