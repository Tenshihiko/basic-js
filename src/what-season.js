const CustomError = require('../extensions/custom-error');

const UnableDetermine = 'Unable to determine the time of year!';
module.exports = function getSeason(date) {
  if (date === undefined) {
    return UnableDetermine;
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error(UnableDetermine);
  }

  const month = date.getMonth();
  switch (Math.floor(((month + 1) % 12) / 3)) {
    case 0: return 'winter';
    case 1: return 'spring';
    case 2: return 'summer';
    case 3: return 'fall';
    default:
      return UnableDetermine;
  }
};
