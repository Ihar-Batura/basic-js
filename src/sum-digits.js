const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    res += digit;
    if (res.toString().length > 1) {
      let first = parseInt(res.toString()[0]);
      let second = parseInt(res.toString()[1]);
      res = 0;
      res += first;
      res += second;  
    }
  }
   return res;
}


module.exports = {
  getSumOfDigits
};
