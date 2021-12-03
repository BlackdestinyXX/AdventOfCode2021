const ln = require("line-reader")

let previous = 0;
let numbers = 0;

ln.eachLine('./input.txt', function(line, last) {
    let number = parseInt(line)

    if(number > previous && !previous == 0) {
        previous = number
        numbers += 1;
    } else {
        previous = number
    }

    console.log(numbers)
});