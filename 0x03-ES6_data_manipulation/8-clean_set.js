export default function cleanSet(set, startString) {
  const result = [];

  if (!startString) {
    return '';
  }
  set.forEach((ele) => {
    if (ele.startsWith(startString)) {
      result.push(ele.slice(startString.length));
    }
  });
  return result.join('-');
}
