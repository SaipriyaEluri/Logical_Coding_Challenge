// missing num in  consecutive numbers 

function MissingNumCons(arr){
    let missingNumarr = []
    for(let i = 0; i<arr.length; i++){
        let diff = arr[i+1] - arr[i];

        if(diff > 1){
            for(let j = 1; j < diff ; j++){
                missingNumarr.push(arr[i]+j)
            }
        }
    }
    console.log(missingNumarr)
}

let input = [1,2,3,4,5,6,9,12,15]
MissingNumCons(input)