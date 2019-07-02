// Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.




function num (x,y){
  if ( 
    !((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0)) &&
  
    ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0))
   ){
  return true
  }
  return false
  }
  
  num (11,56)
