let arr1 = [1,2,3,4,5,6,7]
let arr2 = [2,3,4,5,6,7,8,9,10]

function FindCommon(arr1,arr2){
    let arr3 = [];
    for(num1 of arr1){
        for(num2 of arr2){
            if(num1 === num2){
                arr3.push(num1)
            }
        }
    }
    console.log(arr3)
}
FindCommon(arr1,arr2)

// =======================================================================

function findIntersection(arr1, arr2){
    return arr1.filter(num => arr2.includes(num))
}

console.log(findIntersection(arr1,arr2))


//=====================unique elements=======================================

function UniqueElements(arr1,arr2){
    return arr1.filter(num => !arr2.includes(num)).concat(arr2.filter(num => !arr1.includes(num)))
}
console.log(UniqueElements(arr1,arr2))

// =============================shorcut way======================================

let ARR1 = [10,20,30,40,50,60]
let ARR2 = [30,40,50,60,70,80]

let set1 = new Set(ARR1)
let arr3 = ARR2.filter((num) => set1.has(num))

console.log(arr3)