const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    lowerString = string.toLowerCase();
    console.log(lowerString);
    let arr = lowerString.split('');
    console.log(arr);
    cleanArray = arr.filter(item => alphanumerical.includes(item));
    console.log(cleanArray);
    let cleanString = cleanArray.join('');
    cleanArray.reverse();
    console.log(cleanArray);
    let reverseString = cleanArray.join('');
    console.log(reverseString);
    if(reverseString == cleanString){
        return true;
    } else {
        return false;
    }
};
console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
