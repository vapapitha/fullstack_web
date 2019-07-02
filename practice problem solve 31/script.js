// Write a JavaScript program to check two given non-negative integers and if one of the number  is multiple of 7 or 11  and both number not same


function num (x,y){
if ((((x % 7 == 0) || (x % 11 == 0)) || ((y % 7 == 0) || (y % 11 == 0))) && (x !== y) ){
return true
}
return false
}

num (11,56)








// function num (x,y){
//   if ((((x % 7 == 0) || (x % 11 == 0)) || ((y % 7 == 0) || (y % 11 == 0))) && ((x < y) || (y < x)) ){
//   return true
//   }
//   return false
//   }
  
//   num (11,56)
  


