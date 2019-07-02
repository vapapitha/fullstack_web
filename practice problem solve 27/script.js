// Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.



function check (x,y,z){

  if ( (x >= 20) && ((x < y) || (x < z)) ||
  (y >= 20) && ((y < x) || (y < z)) ||
  (z >= 20) && ((z < y) || (z < x)) 
    ){
 
 return true
  }else {
   return false
 }
 
 }
 
 check (30,40,15)