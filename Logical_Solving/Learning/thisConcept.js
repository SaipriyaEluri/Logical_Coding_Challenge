console.log(this)   //  window object or browser object

const obj = {
    firstName : 'Sai',
    lastName : "priya",
    getThis : function(){
        return this.firstName + " "+ this.lastName
    }
}
console.log(obj.getThis())   // we can access other properties and methods inside the object


function callingThis(){
    console.log(this)
}
callingThis()    // refers to global object

///inside arrow functions ===========================================
const arrow = () => this
console.log(arrow())

const person = {
    name : 'John',
    greet : ()=> {
        console.log(this.name) 
    }
}
person.greet()    // undefined  // arrow functions don't have their 'this' , instead inherit from lexical scoping

const person2 = {
    name : 'john',
    greet : function() {
        const arrow = () => {
            console.log(this.name)
        }
        arrow()
    }
}
person2.greet()


// inside event listeners 

// document.getElementById("button").addEventListener('click' , function(){
//     console.log(this)  // the button element
// })


// inside setTimeout and setInterval 

const person3 = {
    name : 'priyaaaaa',
    age : 23,
    greet : function(){
        setTimeout(function(){
            console.log(this.name)
        },1000)
    }
}
person3.greet()   // getting undefined unless we use arrow functions

const person4 = {
    name : 'priyaaaas',
    age : 23,
    greet : function() {
        setTimeout(() => {
            console.log(this.name + " " + this.age)
        }, 1000);
    }
}
person4.greet()   // priyaaaas 23


// call, apply, bind - to manipulate the value of "this" in functions

const myObj = {
    name : 'Sai Priya Eluri'
}

function myCallFun(greeting){
    console.log(greeting + " "+ this.name)
}
myCallFun.call(myObj, "hello")
// ========================================================

function myApplyFun(greeting, age, role){
    console.log(`${greeting} ${this.name}, your age is ${age} and your role is ${role}`)
}
myApplyFun.apply(myObj,["Hello", 23,'Software developer'])
// =======================================================================

const boundFunc = myApplyFun.bind(myObj, "Hi", 25, 'Angular Developer')
boundFunc();