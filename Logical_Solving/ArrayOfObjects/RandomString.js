let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let length = Math.floor(Math.random() * 9)  // will get upto max 8 length
let randomStr = "";

for(let i = 0; i < length; i++){
    randomStr += str.charAt(Math.floor(Math.random() * str.length)) 
}
console.log(randomStr)