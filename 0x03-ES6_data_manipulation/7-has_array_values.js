export default function hasValuesFromArray(set, array) {
  let result = true;
  array.forEach((ele) => {
    if (!set.has(ele)) {
      result = false;
    }
  });
  return result;
}
