// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.




function num(x, y, z) {
 if ((x % 10 == y % 10) ||
     (x % 10 == z % 10) ||
     (z % 10 == y % 10) 
 ){
  return true

 }else {
   return false
 }

}






num(89, 63,29);
