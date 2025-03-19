function FindPairs(arr, target){

    arr.sort((a,b) => a-b)
    let newArr = []
    let left = 0;
    let right = arr.length-1;

    let sum = arr[left] + arr[right]

    while(left < right){
        if(sum === target){
            newArr.push([arr[left],arr[right]]);
            left++;
            right--;
        }else if(sum > target){
            left++;
        }else if(sum < target){
            right--;
        }
    }
    return newArr

}

let input = [1,2,3,4,5,6,7,8,9]
let target = 10;
console.log(FindPairs(input,target))