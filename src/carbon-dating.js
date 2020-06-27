const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  const activityNum = parseFloat(sampleActivity);
  if (typeof (sampleActivity) !== 'string'
    || !sampleActivity
    || Number.isNaN(activityNum)
    || activityNum <= 0
    || activityNum >= MODERN_ACTIVITY) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(activityNum)) / (LN2 / HALF_LIFE_PERIOD));
};
