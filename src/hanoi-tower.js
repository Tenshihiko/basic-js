const CustomError = require('../extensions/custom-error');

const SEC_IN_HOUR = 3600;
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const
    turns = Math.pow(2, disksNumber) - 1,
    turnsAtSec = turnsSpeed / SEC_IN_HOUR,
    seconds = Math.floor(turns / turnsAtSec);

  return {
    turns,
    seconds,
  };
};
