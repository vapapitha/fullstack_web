// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15



function check(x, y) {

  if ( (((x+y) == 15) || (Math.abs(x-y) == 15))  || ((x == 15) || (y == 15)) ){
    return true;
  }

  
  else{
    return false;
  }

}

console.log(check (15,20));
console.log(check (10,5));
console.log(check (35,50));
console.log(check (10,20));







