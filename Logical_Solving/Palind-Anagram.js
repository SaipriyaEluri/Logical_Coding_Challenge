let str = "MADAM";
let reverseStr = ""

for(let i = (str.length-1); i >= 0; i--){
    reverseStr += str[i]
}
console.log(reverseStr)
if(reverseStr == str ){
    console.log("Given string is palindrome")
}else {
    console.log("Given string is not palindrome")
}

//using built-in methods

let revStr = str.split("").reverse().join("");
// split -- converts string into array
// reverse -- reverse the array
// join -- joins the array into string 
console.log(revStr)

// +++++++++++++ ANAGRAM +++++++++++++++++ // same length same characters but in different order

let str1 = "eleven Plus twf";
let str2 = "twelve plus One";

// using sort method 

str1 = str1.replace(/\s+/g,'').toLowerCase()
str2 = str2.replace(/\s+/g,'').toLowerCase()

if(str1.length === str2.length){
    const sortedArr1 = str1.split('').sort().join('')
    const sortedArr2 = str2.split('').sort().join('')

    if(sortedArr1 == sortedArr2){
        console.log("Given string is Anagram")
    }else{
        console.log("Given string is not Anagram")
    }
}
// using char frequency method

if(str1.length === str2.length){
    let charCount = {};

    for(char of str1){
        charCount[char] = (charCount[char] || 0) + 1
    }
    for(char of str2){
        if(!charCount[char]){
            console.log("not anagrams :) ")
            return false;
        }
        charCount[char]--;  
    }
    console.log("Anagrams !!!!!!!!")
    return true
}



