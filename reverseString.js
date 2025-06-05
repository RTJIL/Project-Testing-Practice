/**
 * @param {string} str
 */
function reverseString(str) {
  if (str.length === 0) return '';
  return reverseString(str.slice(1)) + str.charAt(0);
}

export { reverseString }