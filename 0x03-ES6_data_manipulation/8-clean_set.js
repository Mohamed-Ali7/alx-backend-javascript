export default function cleanSet(set, startString) {
  const result = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }
  set.forEach((ele) => {
    if (typeof ele === 'string' && ele.startsWith(startString)) {
      result.push(ele.slice(startString.length));
    }
  });
  return result.join('-');
}
