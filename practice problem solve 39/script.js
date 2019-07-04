// Write a JavaScript program to create a new string from a given string changing the position of first and last characters.



function exStr(str) {

  var str2 = str.substring(1, str.length - 1)
  var str1 =  str.charAt(str.length - 1)
  var str3 = str.charAt(0)
   
  return str1 + str2 + str3;
  
  }
  
  console.log(exStr("welcome"));
  
