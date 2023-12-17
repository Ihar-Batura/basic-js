const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = typeof str === 'string' ? str : String(str);
  let add = options.addition === undefined ? '' : String(options.addition);
  let sep = options.separator === undefined ? '+' : String(options.separator);
  let addSep = options.additionSeparator === undefined ? '|' : String(options.additionSeparator);
  let addRT = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  let repTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  let res = '';


    for (let i = 0; i < repTimes; i++) {
      res += str;
        for (let j = 0; j < addRT; j++) {
          res += add;
        if (j < addRT - 1) {
          res += addSep;
        }
    }
    if (i < repTimes - 1) {  
      res += sep;
    }
  }
    return res;
  
}

module.exports = {
  repeater
};
