const CustomError = require('../extensions/custom-error');

const SEC_IN_HOUR = 3600;
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const turnsAtSec = turnsSpeed / SEC_IN_HOUR;
  const seconds = Math.floor(turns / turnsAtSec);

  return {
    turns,
    seconds,
  };
};
