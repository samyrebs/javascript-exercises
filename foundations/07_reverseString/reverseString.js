const reverseString = function(string) {
    let strArray = string.split("");
    strArray.reverse();
    let newString = strArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
