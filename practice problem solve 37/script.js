// Write a JavaScript program to check from three given integers which is the bigest number 



function check (x,y,z){

  if (x>y && x>z ){
    return x
  }
  else if (y>x && y>z){
    return y
  }
 
  else {
   return z
 }
 
 }
 
 check (30,40,15)