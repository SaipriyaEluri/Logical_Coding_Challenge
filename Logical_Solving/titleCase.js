 
let str = "sai priya eluri";
let newStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
console.log(newStr);

let arr = ["apPle","baNana","graPes","oranGes","kiWi"]
let newArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log(newArr)
