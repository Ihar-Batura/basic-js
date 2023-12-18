const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    count = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        res += matrix[i][j];
      }
      else if (matrix[i][j] === 0 && matrix[i].length === 1) {
        return res;
      }
      else if (matrix[i][j] === 0) {
        count++;
        if (count > 1) {
          return res;
        }
      }
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
