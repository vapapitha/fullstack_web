var counter = Number(prompt (" Input a Number"));
var counterNumber = Number (prompt ("input a Number which is larger than your first input Number "));
while (counter <= counterNumber){
   if (counter % 3 === 0 && counter % 5 === 0){
       console.log (counter);
   }
counter++
}

//Print all the numbers from given number floor to given number ceiling which are divisible by 3 AND 5

var counter = Number(prompt (" Input a Number"));
var counterNumber = Number (prompt ("input a Number which is larger than your first input Number "));
while (counter <= counterNumber){
   if (counter % 3 === 0 || counter % 5 === 0){
       console.log (counter);
   }
counter++
}