// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.


// Another  way to solve



function front_back(str)
{
  first = str.charAt((0))
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));