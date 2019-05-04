function oddEven() {
    var odd = "odd";
var even = "even";
var oddEven = prompt ("What you want,'Odd' or 'Even' number??? ")

if (oddEven === odd ){
    var counter = Number(prompt (" Input a Number"))
var maximumNumber = Number (prompt ("input a Number which is larger than your first input Number "))
while (counter <= maximumNumber){
    if(counter % 2 !==0){
        console.log (counter);alert (counter)

    }
    counter++
}
}

else if (oddEven == even){
    var counter = Number(prompt (" Input a Number"))
var maximumNumber = Number (prompt ("input a Number which is larger than your first input Number "))
while (counter <= maximumNumber){
    if(counter % 2 ===0){
        console.log (counter);alert (counter)

    }
    counter++
}
}

}