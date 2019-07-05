// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. 



// another way to solve


function front_back3(str){

  let back = str.substring(str.length-3)

  if (str.length>=3){
   return back + str + back;
 }
   else
     return false;
 }
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));
