## 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的**最长子串**的长度。

实例1:
```!
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

实例2:
```!
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

实例3:
```!
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

```js
function lengthOfLongestSubstring(str) {
  if (typeof str !== 'string' || str.length === 0) return 0;

  let longestSubStr = '';
  let ret = 0;
  let subStr = '';

  for (let char of str) {
    if (subStr.indexOf(char) === -1) {
      subStr += char;
      ret = ret > subStr.length ? ret : subStr.length;
      longestSubStr = ret > subStr.length ? longestSubStr : subStr;
    } else {
      subStr = subStr.slice(subStr.indexOf(char));
    }
  }

  console.log('longestSubStr: ', longestSubStr);
  console.log('length of longestSubStr: ', ret);
  return ret;
}
```