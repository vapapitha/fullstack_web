// create secretNunber
var secretNumber = 5;
//  ask for guessing number
var guess = prompt ("Guess your Number");
// check number if it is right
if (Number (guess)=== secretNumber){
    alert ("Your answer is correct");
}
// check if is too high

else if ( Number (guess)> secretNumber) {
    alert ("Your answer is too high");
}

// check if is too low

else if ( Number (guess)< secretNumber) {
    alert ("Your answer is too low");
}