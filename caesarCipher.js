/**
 *
 * @param {string} str
 * @param {number} sf
 */
function caesarCipher(str, sf) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);

    if (char >= 'a' && char <= 'z') {
      let shifted = (((code - 97 + sf) % 26) + 26) % 26;
      result += String.fromCharCode(97 + shifted);
    } else if (char >= 'A' && char <= 'Z') {
      let shifted = (((code - 65 + sf) % 26) + 26) % 26;
      result += String.fromCharCode(65 + shifted);
    } else {
      result += char; // leave symbols unchanged
    }
  }

  return result;
} // hello, 2 =>

export { caesarCipher }
