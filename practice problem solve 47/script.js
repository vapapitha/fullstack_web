// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one

function check_script(str){
  let firststr =str.substring(0,4)

  if (str.length < 6 || str.length > 10) {
    return str;
  }
  else if (str.substring(4,10) == 'Script' ){
    return firststr
  }
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));
