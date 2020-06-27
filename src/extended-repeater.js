const CustomError = require('../extensions/custom-error');

function getValueOrDefault(obj, key, def) {
  return key in obj ? obj[key] || def : def;
}

function oneLvlRepeater(repeated, options) {
  const str = repeated === null ? 'null'
    : repeated === undefined ? ''
      : repeated.toString();

  const times = getValueOrDefault(options, 'repeatTimes', 1);
  const separator = getValueOrDefault(options, 'separator', '');
  const addition = getValueOrDefault(options, 'addition', '');

  return new Array(times).fill(str).map((e) => e + addition).join(separator);
}

module.exports = function repeater(str, options) {
  const addition = oneLvlRepeater(options.addition, {
    repeatTimes: getValueOrDefault(options, 'additionRepeatTimes', 0),
    addition: null,
    separator: getValueOrDefault(options, 'additionSeparator', '|'),
  });

  return oneLvlRepeater(str, {
    repeatTimes: options.repeatTimes,
    addition,
    separator: getValueOrDefault(options, 'separator', '+'),
  });
};
