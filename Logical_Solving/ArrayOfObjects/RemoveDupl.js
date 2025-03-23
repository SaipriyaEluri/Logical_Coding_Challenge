const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Alice" },
    { id: 5, name: "Charley" }
  ];

  const newArr = users.filter((item,index,self) =>
    index === self.findIndex((obj) => obj.id === item.id)
);
console.log(newArr)

// return duplicates

const newArr2 = users.filter((item,index,self) =>
  index !== self.findIndex((obj) => obj.id === item.id)
);
console.log(newArr2)

//   Execution Flow
//   Iteration 1: (Processing { id: 1, name: "Alice" })
//   item = { id: 1, name: "Alice" }, index = 0
  
//   findIndex() finds { id: 1, name: "Alice" } at index 0.
  
//   ✅ Condition: 0 === 0 → Keep this item.
  
//   Iteration 2: (Processing { id: 2, name: "Bob" })
//   item = { id: 2, name: "Bob" }, index = 1
  
//   findIndex() finds { id: 2, name: "Bob" } at index 1.
  
//   ✅ Condition: 1 === 1 → Keep this item.
  
//   Iteration 3: (Processing { id: 1, name: "Alice" } Duplicate)
//   item = { id: 1, name: "Alice" }, index = 2
  
//   findIndex() finds { id: 1, name: "Alice" } at index 0.
  
//   ❌ Condition: 2 !== 0 → Remove this item.
  
//   Iteration 4: (Processing { id: 3, name: "Charlie" })
//   item = { id: 3, name: "Charlie" }, index = 3
  
//   findIndex() finds { id: 3, name: "Charlie" } at index 3.
  
//   ✅ Condition: 3 === 3 → Keep this item.