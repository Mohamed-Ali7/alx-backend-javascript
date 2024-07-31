export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const arrBuffer = new ArrayBuffer(length);
  const dv = new DataView(arrBuffer);

  dv.setInt8(position, value);
  return dv;
}
