
function findLarConsec(arr){
arr.sort((a,b)=> a-b)

let longestSeq = []
let currentSeq = [arr[0]]

for(let i = 1; i < arr.length ; i++){
    if(arr[i] === arr[i-1] + 1){
        currentSeq.push(arr[i])
    }else if(arr[i] !== arr[i-1]){
        if(currentSeq.length > longestSeq.length){
            longestSeq = currentSeq
        }
        currentSeq = [arr[i]]
    }
}
if(currentSeq.length > longestSeq.length){
    longestSeq = currentSeq
}
return longestSeq
}

let input = [1,2,3,12,13,14,15,2,3,40,41]
console.log(findLarConsec(input))