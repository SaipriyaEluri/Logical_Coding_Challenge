// JSON.parse used to parse a JSON formatted string into a javascript Object

const firstString = `
  {
    "name":"Sai Priya",
    "age":22,
    "role":"Software Developer",
    "Company":"Versatile Commerce"
  }
`
console.log(JSON.parse(firstString))   // returns object

// JSON.stringify to stringify the javascript object into JSON formatted string

const firstObject = {
    name : "Sai Priya",
    age : 22,
    role : "Front end developer",
    company : "Versatile Commerce"
}
console.log(JSON.stringify(firstObject))  // returns string


//converting string into array 

const str = "hello"
const arr = Array.from(str)
console.log(arr)   // ['h','e','l','l','o']

//converting object into array 

const obj = {a : 1, b : 2, c : 3, d : 4, e : 5}
const a1 = Array.from(Object.keys(obj));
const a2 = Array.from(Object.values(obj));
const a3 = Array.from(Object.entries(obj))
console.log(Object.keys(obj))

console.log(a1)
console.log(a2)
console.log(a3)