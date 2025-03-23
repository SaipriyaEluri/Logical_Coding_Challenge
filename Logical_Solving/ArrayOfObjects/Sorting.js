let names  = ["John Doe", "Alex Doe", "Peter Doe", "Elon Doe"];
let sortedNames = names.sort();
console.log(sortedNames);

let numbers = [45,23,67,12,34,87,90,45];
let sortedNumbers = numbers.sort();
console.log(sortedNumbers)

// ===========================================================================

let users = [
    {
      name: "John Doe",
      age: 17
    },
    {
      name: "Elon Doe",
      age: 27
    },
    {
      name: "Alex Doe",
      age: 14
    }
  ];

  users.sort((a,b) => a.name.localeCompare(b.name));
  console.log(users);

  users.sort((a,b) => b.name.localeCompare(a.name));
  console.log(users)

  users.sort(function(a,b) {
    if(a.name < b.name){
        return -1
    }
    if(a.name > b.name){
        return 1
    }
    return 0;
  })
  console.log(users)

  users.sort(function(a,b) {
    if(a.age < b.age){
        return -1
    }
    if(a.age > b.age){
        return 1
    }
    return 0;
  })
  console.log(users)