// move all the zeros at last
let arr = [2,3,5,0,7,8,0,5,6,2,0,9,8];
let arr1 = [];
let arr2 = [];

for(var num of arr){
    if(num != 0){
        arr1.push(num)
    }else{
        arr2.push(num)
    }
}
let arr3 = arr1.concat(arr2)
console.log(arr3)