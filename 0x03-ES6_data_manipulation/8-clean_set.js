export default function cleanSet(set, startString) {
  const result = [];
  for (const ele of set) {
    if (ele.startsWith(startString)) {
      result.push(ele.slice(startString.length));
    }
  }
  return result.join('-');
}
