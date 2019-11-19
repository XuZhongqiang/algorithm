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