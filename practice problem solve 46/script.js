// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

function java(str){

  let front = str.substring(0, 4);
  if (str.length < 4)
  {
    return false;
  }
  else if (front == 'Java') 
  {
    return true;
  }else{
    return false;
  } 
}

console.log(java("JavaScript"));
console.log(java("Java"));
console.log(java("Python"));

