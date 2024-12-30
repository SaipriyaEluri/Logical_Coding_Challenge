//program to find vowels in a string

var str="Hi,Javascript You Are Amazing  and Powerfull script";

let vowels = ['a', 'e', 'i', 'o', 'u']

function findVowels(str) {
    let count = 0;
    let strVowels = []

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
            strVowels.push(str[i]);
        }
    }
    let vowelsString = strVowels.join(""); // converting array of string to string 
    console.log(count);
    console.log(vowelsString)
}
findVowels(str);

// find vowels using switch case 
var str1 = "HellO Front end Developer";
let vowelCount = 0;
let newVowelArr = [];

for(var char of str1){
    switch(char.toLowerCase()){
        case 'a' :
        case 'e' :
        case 'i' :
        case 'o' :
        case 'u' :
            vowelCount++;
            if(!newVowelArr.includes(char)){    // for remove duplicates
                newVowelArr.push(char)
            }
    }
}
console.log(vowelCount);
console.log(newVowelArr);