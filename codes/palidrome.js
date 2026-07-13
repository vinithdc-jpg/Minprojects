function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");
    return str === reverse;
}

console.log(isPalindrome("madam"));