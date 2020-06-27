const CustomError = require('../extensions/custom-error');

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_PREV = '--double-prev';
const DOUBLE_NEXT = '--double-next';
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error('arr is not an Array!');
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case DISCARD_NEXT:
        i++;
        break;
      case DISCARD_PREV:
        if (arr[i - 2] !== DISCARD_NEXT) {
          result.pop();
        }
        break;
      case DOUBLE_PREV:
        if (i - 1 >= 0
          && arr[i - 2] !== DISCARD_NEXT) {
          result.push(arr[i - 1]);
        }
        break;
      case DOUBLE_NEXT:
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }

  return result;
};
