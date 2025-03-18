let sentence = "Iam SaiPriya Eluri , working as a software Developer at Versatile Commerce."

function LongestWord(sentence){
    let words = sentence.replace(/[^a-zA-Z ]/g, "").split(" ")   
    console.log(words) 
    let longWord = words[0]

    words.forEach(element => {
        if(element.length > longWord.length){
            longWord = element
        }
    });
    console.log(longWord)
}
LongestWord(sentence)