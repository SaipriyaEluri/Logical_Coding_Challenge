const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 1, name: "Alice" },{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }];

const commonObjs = arr1.filter((item) => arr2.find((item2) => item2.id === item.id));

console.log(commonObjs)


// flat array  in object

const data = [
    { category: "fruit", items: ["apple", "banana"] },
    { category: "vegetable", items: ["carrot", "spinach"] }
  ];

  const result = data.map((obj) => obj.items).flat();

  console.log(result)


  // converting array into single object
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  
const userObj = users.reduce((acc,item) => {
    acc[item.id] = item;
    return item
},{})
  
  console.log(userObj);

  //check all objects have specific key 

  const userlist = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 }
  ];

  const hasAge = userlist.every((user) => "age" in user)
  console.log(hasAge)
