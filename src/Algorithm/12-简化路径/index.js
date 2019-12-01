/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  const paths = path.split('/');

  const simplePaths = [];
  for (let i = 0; i < paths.length; i++) {
    const part = paths[i];
    if (part === '' || part === '.') {
      continue;
    } else if (part === '..') {
      if (simplePaths.length > 0) {
        simplePaths.pop();
      }
    } else {
      simplePaths.push(part);
    }
  }

  return `/${simplePaths.join('/')}`;
};

console.log(simplifyPath('/a//b////c/d//././/..'));