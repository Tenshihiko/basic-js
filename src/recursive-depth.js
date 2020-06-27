const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxChildDepth = 0;

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        maxChildDepth = Math.max(maxChildDepth, this.calculateDepth(element));
      }
    });

    return maxChildDepth + 1;
  }
};
