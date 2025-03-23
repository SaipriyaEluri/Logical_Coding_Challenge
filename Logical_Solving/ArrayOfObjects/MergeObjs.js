const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 1, age: 25 }, { id: 2, age: 30 }];

const merged = arr1.map((item) => ({
    ...item,
    ...arr2.find((item2) => item2.id == item.id)
}))

console.log(merged)    // [ { id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob', age: 30 } ]



//               => {}   // when we are writing multiple lines of code   // return must
//               => ({})  // directly returning object implicitly        // no need of return