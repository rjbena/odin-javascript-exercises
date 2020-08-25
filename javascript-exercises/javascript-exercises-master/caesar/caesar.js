const caesar = function (str, shift) {
  if (shift < 0) {
    return caesar(str, shift + 26);
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charcode = str[i];
    if (charcode.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        charcode = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        charcode = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += charcode;
  }
  return result;
};

module.exports = caesar;
