const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];
 //using reduce
  const groupedItems = items.reduce((acc,item) => {
    const category = item.category;
    if( !acc[category]){
        acc[category] = []
    }
    acc[category].push(item.name);
    return acc;
  }, {})

  console.log(groupedItems) // { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }


  // using for each 
  const singleObj = {};
  const groupOfItems = items.forEach((item) => {
    if(!singleObj[item.category]){
        singleObj[item.category] = []
    }
    singleObj[item.category].push(item.name)
    return singleObj;
  })
  console.log(singleObj)
