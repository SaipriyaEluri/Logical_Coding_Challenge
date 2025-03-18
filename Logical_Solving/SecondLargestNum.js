function SecondLargestNum(arr) {
    arr = [...new Set(arr)]
    arr.sort((a, b) => b - a)
    return arr[1]

}

let input = [10, 30, 5, 25, 35, 15, 14, 27, 30]
console.log(SecondLargestNum(input))

// ====================== nth largest number ========================================================

function NthLargestNum(arr, n){
    arr = [...new Set(arr)]
    arr.sort((a,b) => b-a)
    console.log(arr)

    let nthNum = arr.length > n ? arr[n-1] : null;

    console.log(nthNum)
}

let input2 = [78,33,54,2,787,23,5667,54,78,23,87,43,67,50]
NthLargestNum(input2, 7)
NthLargestNum(input2, 3)
NthLargestNum(input2, 50)  // null

// ==========================second max num without sort method============================================
function SecondMax(arr){

    let firstMax = -Infinity ; let secondMax = -Infinity;

    for(let num of arr){
        if(num > firstMax){
            secondMax = firstMax;        // assigning previous max value
            firstMax = num;              // assigning current value
        }else if(num < firstMax && num > secondMax){
            secondMax = num;
        }
    }
    console.log(firstMax, secondMax)
}
let arr = [23,45,67,12,34,78,98,65,43,12,32]
SecondMax(arr)

