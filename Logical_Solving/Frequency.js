let arr = [1,2,3,4,5,6,2,3,4,5,7,8,9,2,3,3,2,2,2];

let count = 0;
// frequency of array particular item 
const frequency = (arr,item) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            count++
        }
    }
}
frequency(arr,3);
console.log(count);

// frequency of array of all items    // for larger items take object

const frequency2 = (arr) => {
    const obj = {};
    arr.forEach((num) => {
        obj[num] = (obj[num] || 0) + 1;
    })
    console.log(obj)
}
frequency2(arr);


// frequency of string item 
let str = "banananananssssss";

const strFreq = (str) => {
   let newStr = str.split("")
   console.log(newStr);
   let obj = {};
   newStr.forEach((char) => {
        obj[char] = (obj[char] || 0) + 1;
   })
   console.log(obj)
}
strFreq(str);

// or one more direct way

const stringFreq = (str) => {
    let frequency = {};
    for(var char in str){
        frequency[char] = (frequency[char] || 0) + 1
    }
    console.log(frequency)
}
strFreq(str)

