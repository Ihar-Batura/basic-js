const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyWord = key.padEnd(message.length, key);
    let count = 0; // отнимает индекс когда встречается любой символ кроме букв

    for (let i = 0; i < message.length; i++) {
      let letterMess = message[i].toUpperCase();
      let letterKey = keyWord[i - count].toUpperCase();
      if (!alphabet.includes(letterMess)) {
        result += message[i];
        count++;
      } else {
        let numLetterMessage = alphabet.indexOf(letterMess);
        let numLetterKey = alphabet.indexOf(letterKey);
        let numberLetter = (numLetterMessage + numLetterKey) % 26;
        result += alphabet[numberLetter];
      }
    }

    return this.direct === true ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyWord = key.padEnd(message.length, key);
    let count = 0; // отнимает индекс когда встречается любой символ кроме букв

    for (let i = 0; i < message.length; i++) {
      let letterMess = message[i].toUpperCase();
      let letterKey = keyWord[i - count].toUpperCase();
      if (!alphabet.includes(letterMess)) {
        result += message[i];
        count++;
      } else {
        let numLetterMessage = alphabet.indexOf(letterMess);
        let numLetterKey = alphabet.indexOf(letterKey);
        let numberLetter = numLetterMessage - numLetterKey;
        numberLetter = numberLetter < 0 ? numberLetter + 26 : numberLetter;
        result += alphabet[numberLetter];
      }
    }
    return this.direct === true ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
