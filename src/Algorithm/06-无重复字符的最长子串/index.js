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

lengthOfLongestSubstring('pwwkew');