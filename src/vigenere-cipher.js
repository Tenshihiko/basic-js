const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(direct) {
    this.direct = direct === undefined ? true : direct;
  }

  encrypt(message, key) {
    return VigenereCipheringMachine.changeMessage(message, key, 1, this.direct);
  }

  decrypt(message, key) {
    return VigenereCipheringMachine.changeMessage(message, key, -1, this.direct);
  }

  static isChar(symbol) {
    return VigenereCipheringMachine.charToInt(symbol) >= 0;
  }

  static charToInt(symbol) {
    return VigenereCipheringMachine.alphabet.indexOf(symbol);
  }

  static changeMessage(msg, key, dir, direct) {
    if (msg === null || msg === undefined
      || key === null || key === undefined) {
      throw Error();
    }

    const umsg = msg.toUpperCase();
    const ukey = key.toUpperCase();
    const ml = msg.length;
    const kl = key.length;
    const al = VigenereCipheringMachine.alphabet.length;
    const resArr = [];
    let keyIter = 0;

    for (let i = 0; i < ml; i++) {
      if (VigenereCipheringMachine.isChar(umsg[i])) {
        const x = VigenereCipheringMachine.charToInt(umsg[i]);
        const y = VigenereCipheringMachine.charToInt(ukey[keyIter]);
        const a = (x + dir * y + al) % al;

        resArr.push(VigenereCipheringMachine.alphabet[a]);

        keyIter = (keyIter + 1) % kl;
      } else {
        resArr.push(umsg[i]);
      }
    }

    return (!direct ? resArr.reverse() : resArr).join('');
  }
}

module.exports = VigenereCipheringMachine;
