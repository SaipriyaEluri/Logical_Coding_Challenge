// input: 4
// output : 
// *
// * *
// * * *
// * * * *

function PatternPrint(rows) {
    for (let i = 0; i < rows; i++) {  // Loop for rows
        let star = "";  // Initialize an empty string for each row

        for (let j = 0; j <= i; j++) {  // Loop for columns (stars)
            star += "* ";  // Append "* " to the string
        }

        console.log(star.trim());  // Print the star pattern
    }
}
PatternPrint(4)