// Write a JavaScript program to check if a number in the range 40..10000 and it also range next two number.
function check(x, y,z) {


  if((x > 40 && x < 10000) && (x >= y && x <= z)){
    return true
  }

else{
      return false;
    }

}

console.log(check(400, 300, 450));  
console.log(check(80, 320, 79));  
console.log(check(89, 4000, 30));
  