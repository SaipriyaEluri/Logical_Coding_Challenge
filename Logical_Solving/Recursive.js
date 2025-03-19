// A Recursive function is a function that calls itself somewhere within the body function.

function NumberToWords(num){

    if(num === 0) return "zero";
    
    let belowTwenty = ["","one","two","three","four","five","six","seven","eight","nine",'ten',
                    'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

    let tens = ["","","twenty",'thirty','forty','fifty','sixty','seventy','eighty','ninety']

    function helper(n){
        if(n < 20) return belowTwenty[n];
        if(n < 100) return tens[Math.floor(n/10)] + (n % 10 !==0 ?  " " + helper(n % 10) : "");
        if(n < 1000) return helper(Math.floor(n/100)) + " hundred"+ (n % 100 !==0 ? " "+ helper(n % 100) : "");
        if(n < 1000000) return helper(Math.floor(n/1000)) + " thousand" + ( n % 1000 !==0 ? " " + helper(n % 1000) : "");
    }
    return helper(num)
    
}
console.log(NumberToWords(12))
console.log(NumberToWords(76))
console.log(NumberToWords(875))
console.log(NumberToWords(98456))