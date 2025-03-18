let arrNum = [1,2,3,2,4,8,4,5,8,9,3,7];

let dupArr = [];
for(var num of arrNum){
    if(!dupArr.includes(num)){
        dupArr.push(num)
    } 
}
console.log(dupArr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

const newArray = new Set(arrNum);
console.log(newArray);
const newArray2 = Array.from(newArray);
console.log(newArray2)