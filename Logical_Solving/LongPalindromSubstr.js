let str = "madamecivicpmomdadrotator"

function LongestPalindrome(str) {

    let longestSub = "";

    function isPalindrome(s) {
        return s === s.split("").reverse().join("")
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substring = str.substring(i, j + 1);
            if (isPalindrome(substring) && substring.length > longestSub.length) {
                longestSub = substring
            }
        }
    }
    return longestSub;

}

console.log(LongestPalindrome(str))