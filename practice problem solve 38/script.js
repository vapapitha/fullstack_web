// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.



// I have to more practice 



function removeCharacter(str, str2) 
 {
  part1 = str.substring(0, str2);
  part2 = str.substring(str2 + 1, str.length);
  return (part1 + part2);
 }

console.log(removeCharacter("Python",0));
console.log(removeCharacter("Python",3));
console.log(removeCharacter("Python",5));







