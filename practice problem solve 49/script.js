// Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.


function upper_lower(str) {
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);
  if (str.length < 3) {
    return str.toUpperCase();
  }else{
    return front_part + back_part
  }
  

  
}
console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));
