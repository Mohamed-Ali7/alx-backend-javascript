export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];
  for (const ele of array) {
    appendArray.push(appendString + ele);
  }
  return appendArray;
}
