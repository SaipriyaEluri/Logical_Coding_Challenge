const employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 70000 },
    { name: "Charlie", salary: 60000 }
  ];

  /// caluclate total sum of salary
  let totalSalary = 0; 

  employees.forEach((item) => {
        totalSalary = totalSalary + item.salary
  })
  console.log(totalSalary)

  /// using reduce method - to get the single value

  let empSalary = employees.reduce((acc,it) => {
    return acc = acc + it.salary
  },0)
  console.log(empSalary)


  // return highest salary object
  let result = employees.reduce((acc,item) => {
       return item.salary > acc.salary ? item : acc
  })
  console.log(result)


  // using for each method

  let highSalaryObj = employees[0];
  employees.forEach((current) => {
    if(current.salary > highSalaryObj.salary){
       return highSalaryObj = current
    }
  })
  console.log(highSalaryObj)