const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (Number.isNaN(position)
      || !Number.isInteger(position)
      || position < 1
      || position > (this.chain.length - 1)) {
      this.chain = [];
      throw Error('Incorrect position');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const res = this.chain
      .map((el) => (
        el === undefined
          ? '( )'
          : (`( ${el === null ? 'null' : el} )`)))
      .join('~~');

    this.chain = [];
    return res;
  },
};

module.exports = chainMaker;
