let arrNum = [1,2,3,2,4,8,4,5,8,9,3,7];

let dupArr = [];
for(var num of arrNum){
    if(!dupArr.includes(num)){
        dupArr.push(num)
    } 
}
console.log(dupArr);

//return duplicates

let duplicates = arrNum.filter((item,index,self) => self.indexOf(item) !== index);

console.log(duplicates)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

const newArray = new Set(arrNum);
console.log(newArray);
const newArray2 = Array.from(newArray);
console.log(newArray2)

// using reduce method 

const noDuplicates = arrNum.reduce((acc,num) => {
    if(!acc.includes(num)){
        acc.push(num)
    }
    return acc;
},[])
console.log(noDuplicates)