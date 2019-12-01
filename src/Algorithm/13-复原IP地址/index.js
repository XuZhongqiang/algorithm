/**
 * 1. ip地址的规范, 必须有4段, 且由三个点'.'分隔开
 * 2. 每段的值为[0, 255], 但是如果是0, 那么该段就必须是一位数字0, 也就是说012是非法的
 * @param {*} s 
 */

function restoreIpAddresses(s) {
  const ret = [];
  
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <=3; c++) {
        for (let d = 1; d <= 3; d++) {

          if (a + b + c + d === s.length) {
            const partA = s.substring(0, a);
            const partB = s.substring(a, a + b);
            const partC = s.substring(a + b, a + b + c);
            const partD = s.substring(a + b + c, a + b + c + d);

            if (isValidIPPart(partA) && isValidIPPart(partB) && isValidIPPart(partC) && isValidIPPart(partD)) {
              ret.push(`${partA}.${partB}.${partC}.${partD}`);
            }
          }
        }
      }
    }
  }

  return ret;
}

function isValidIPPart(s) {
  if (s && s.startsWith('0') && s.length > 1) {
    return false;
  }

  if (Number.parseInt(s, 10) <= 255) return true;

  return false;
}

console.log(restoreIpAddresses('25525511135'));