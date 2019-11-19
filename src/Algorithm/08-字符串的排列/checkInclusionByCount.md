### 字符串的排列

给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:
```!
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
```

示例2:
```!
输入: s1= "ab" s2 = "eidboaoo"
输出: False
```

注意：

输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间

```js
// 解法: 用计数法, 把每个字母对出现的次数记录下来, 进行对比
function checkInclusionByCount(short, long) {
  const shortCounter = {};
  const longCounter = {};

  const aCharCode = 'a'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    shortCounter[String.fromCharCode(aCharCode + i)] = 0;
    longCounter[String.fromCharCode(aCharCode + i)] = 0;
  }

  for (let i = 0; i < short.length; i++) {
    const char1 = short[i];
    const char2 = long[i];
    shortCounter[char1]++;
    longCounter[char2]++;
  }

  let equalCount = 0;
  for (let i = 0; i < 26; i++) {
    const count1 = shortCounter[String.fromCharCode(aCharCode + i)];
    const count2 = longCounter[String.fromCharCode(aCharCode + i)];
    if (count1 === count2) equalCount++;
  }

  if (equalCount === 26) return true;

  const shortLen = short.length;
  const longLen = long.length;
  for (let i = 0; i < longLen - shortLen; i++) {
    const prevChar = long[i];
    const curChar = long[i + shortLen];
    
    if (prevChar === curChar) continue;

    if (shortCounter[prevChar] === longCounter[prevChar]) {
      equalCount--;
    }
    longCounter[prevChar]--;
    if (shortCounter[prevChar] === longCounter[prevChar]) {
      equalCount++;
    }

    if (shortCounter[curChar] === longCounter[curChar]) {
      equalCount--;
    }
    longCounter[curChar]++;
    if (shortCounter[curChar] === longCounter[curChar]) {
      equalCount++;
    }
    
    if (equalCount === 26) return true;
  }

  return false;
}
```