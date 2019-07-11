// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.


function capitalLetter(str) {
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capitalLetter("Write a JavaScript program to capitalize the first letter of each word of a given string."));






// extra

// let str = "Write a JavaScript program to capitalize the first letter of each word of a given string"
// let n = str.split(" ");
// let y = str.substr(1)
// let x = str.length



// var total = 0;

// for(var i = 0; i < 10; i++) {
//   if(i % 3 == 0 || i % 5 == 0) {
//     total += i;
//   }
// }