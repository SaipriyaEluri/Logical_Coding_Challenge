// program to find vowels in a string

var str = "Hi, Javascript You Are Amazing  and Powerfull script";

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
    let vowelsString = strVowels.join("");
    console.log(count);
    console.log(vowelsString)
}
findVowels(str);