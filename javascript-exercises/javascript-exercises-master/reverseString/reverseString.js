const reverseString = function(string) {
    if (typeof string !== "string") {
        return "ERROR";
    }
    let length = string .length;
    if (length <= 0) {
        return "";
    }
    let reverse = '';
    for (let i = length-1; i >=0; i--) {
        reverse += string.charAt(i);
    }
    return reverse;
}

module.exports = reverseString
