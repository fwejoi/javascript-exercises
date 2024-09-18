const palindromes = function (str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reverseStr=cleanedStr.split('').reverse().join('');

    return cleanedStr===reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
