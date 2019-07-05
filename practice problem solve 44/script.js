// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.





function lastDisit(str){

  let str1 =  str.charAt(str.length - 3);   //return o
  let str2 = str.indexOf(str1 ); //return 4
  let back = str.substring(str2, str.length); //return ome
  

  return back + str + back;

  }
  
  console.log(lastDisit("welcome"));
