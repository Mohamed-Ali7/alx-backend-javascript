export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](primitive) {
    let returnValue;

    if (primitive === 'number') {
      returnValue = this._size;
    } else if (primitive === 'string') {
      returnValue = this._location;
    }
    return returnValue;
  }
}
