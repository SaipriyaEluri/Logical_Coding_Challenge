let arr = [10,20,30,15,27,38,56,90,98,76,88,-10];
let MaxNum = arr[0];
let MinNum = arr[0];

for(let i=0 ; i<arr.length; i++){
    if(MaxNum < arr[i]){
        MaxNum = arr[i]
    }
}
for(let i=0; i<arr.length; i++){
    if(MinNum > arr[i]){
        MinNum = arr[i]
    }
}
console.log(MaxNum)
console.log(MinNum)

//using built in methods 

const MaxNum1 = Math.min(...arr);
const MaxNum2 = Math.max(...arr);

console.log(MaxNum1,MaxNum2,'using built in methods')