// Reverse an array using reverse method

let arr = ["Hello", "Javascript"];

function reverseArray(arr) {
    console.log(arr.reverse());
}
reverseArray(arr);

// Reverse an array without using reverse method

let arr1 = ["item1", "item2", "item3", "item4"];
function reverseArrayWithout(arr1) {
    let newArr = [];

    for (let i = (arr1.length - 1); i >= 0; i--) {
        console.log(arr1[i]);
        newArr.push(arr1[i]);
    }
    console.log(newArr);
}
reverseArrayWithout(arr1);

//Reverse a string using methods 
let str = "Hello World";
function strReverse(str) {
    let newStr = str.split('').reverse().join('')
    console.log(newStr);
}
strReverse(str);

//Reverse a string without using methods

let str1 = "Hello India";
let reversedStr = "";

for(let i = (str1.length-1); i >= 0 ; i--){
    reversedStr = reversedStr + str1[i];
}
console.log(reversedStr)