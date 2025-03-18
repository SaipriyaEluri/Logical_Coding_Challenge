let str = "Hello World Programming starts here"

/// using built in methods

function ReverseWord(str){
    let words = str.split(" ");
    let reverseWords = words.map((word) => word.split("").reverse().join(""))
    console.log(reverseWords.join(" "));
}
ReverseWord(str);

/// without using built in methods

function ReverseWordTwo(str){
    let words = str.split(" ");
    let revWords = words.map((word) => {
        let revStr = ""
        for(let i = word.length-1; i>=0; i--){
            revStr = revStr + word[i]
        }
        console.log(revStr)
        return revStr
    })
    console.log(revWords.join(" "))
}
ReverseWordTwo(str)