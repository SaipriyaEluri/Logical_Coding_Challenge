let obj = { name : 'Sai Priya', age : 23 , role : "Software Developer"}

console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("role"))

console.log("age" in obj);

console.log(Object.keys(obj).includes("name"))

//object loop

for(let key in obj){
    console.log(`${key} : ${obj[key]}`)
}

// iterate only values

Object.values(obj).forEach((value) => {
    console.log(value)
})

