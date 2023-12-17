const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength: function() {
    return this.chain.length;
  },
  addLink: function(value) {
    if (value === undefined) {
      this.chain.push('( )');
    }
    else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink: function(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain: function() {
    this.chain.reverse();
    return this;
  },
  finishChain: function() {
    let chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr;
  }
};

module.exports = {
  chainMaker
};
