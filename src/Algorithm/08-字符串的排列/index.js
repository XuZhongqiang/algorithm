/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function isString(str) {
  return typeof str === 'string';
}

/**
 * 只要两段连续的字符串中包含的字符相同, 那么他们必然能组成排列
 * 逐步拿短字符串在长字符串中遍历, 检查长字符串中是否存在一段字符串与短字符串拥有相同的字符
 * @param {*} short 短的字符串
 * @param {*} long 长的字符串
 */

const storage = {};

function check(short, long) {
  const shortSorted = short.split('').sort().join('');
  const shortLen = short.length;
  const longLen = long.length;

  for (let i = 0; i <= longLen - shortLen; i++) {
    const interceptedStr = long.substr(i, shortLen);
    
    let sortedInterceptedStr; 
    // 将已排序过的字符串保存
    if (storage[interceptedStr]) {
      sortedInterceptedStr = storage[interceptedStr]
    } else {
      sortedInterceptedStr = interceptedStr.split('').sort().join('');
      storage[interceptedStr] = sortedInterceptedStr;
    }
    console.log('storage: ', storage);

    if (shortSorted === sortedInterceptedStr) {
      return true;
    }
  }

  return false;
}

function checkInclusion(s1, s2) {
  if (!isString(s1) || !isString(s2)) return false;

  const l1 = s1.length;
  const l2 = s2.length;

  if (l1 === l2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
  }

  const short = l1 < l2 ? s1 : s2;
  const long = l1 > l2 ? s1 : s2;

  return check(short, long);
};

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
