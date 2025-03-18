function ExponentValue(base,exponent){
    let result = 1;
    for(let i = 0; i<exponent; i++){
        result = result * base
    }
    return result;
}
console.log(ExponentValue(2,10));
console.log(ExponentValue(3,10));