const CustomError = require('../extensions/custom-error');

module.exports = function countCats(backyard) {
  let count = 0;

  backyard.forEach((line) => {
    line.forEach((cell) => {
      if (cell === '^^') {
        count++;
      }
    });
  });
  return count;
};
