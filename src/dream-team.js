const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } 
  let str = members.filter((el) => typeof el === 'string');
  let arr = str.join(',').toUpperCase().replace(/[ ]/g, '').replace(/\d/g, '').split(',');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
      res.push(arr[i][0])
  }
  return res.sort().join('');
}

module.exports = {
  createDreamTeam
};
