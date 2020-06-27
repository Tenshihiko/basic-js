const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let teamName = '';
  members.forEach((element) => {
    if (typeof (element) === 'string' && element.length > 0) {
      teamName += element.trim().toUpperCase()[0];
    }
  });

  return teamName.split('').sort().join('');
};
