function TimeConvertTo24(input){

    let [time, modifier] = input.split(" ");
    let [hours,minutes] = time.split(":")

    if(modifier == 'PM' && hours !== 12){
        hours = String(parseInt(hours,10) + 12)
    }else if(modifier == 'AM' && hours == 12){
        hours = '00'
    }
    return `${hours}:${minutes}`
}

console.log(TimeConvertTo24("12:45 AM"))
console.log(TimeConvertTo24("05:45 AM"))
console.log(TimeConvertTo24("08:45 PM"))