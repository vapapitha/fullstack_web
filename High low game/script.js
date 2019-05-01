var number = Number (prompt("enter your number "));
var secretNumber = 16;

if (number === secretNumber){
   alert("your number is correct")
 }

  else if (number >= 0 && number <=9 ){
    alert("your number is too low")
}


else if (number <= 14 && number >=10 ){
    alert("your number is low")
}

 else if (number<0){
    alert("NEGATIVE Number is not Acceptable")
}

else if (number >= 17 && number <=20 ){
       alert("your number is HIGH")
}
    else if (number > 20 ){
        alert("your number is too HIGH")
}

else{
    alert("Error")
    }