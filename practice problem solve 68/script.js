// Write a JavaScript program to find the types of a given angle.

// Types of angles:
// •	Acute angle: An angle between 0 and 90 degrees.
// •	Right angle: An 90 degree angle.
// •	Obtuse angle: An angle between 90 and 180 degrees.
// •	Straight angle: A 180 degree angle.




function angle(angle) {
  if(angle < 90) {
    return "Acute angle.";
  }
  if(angle === 90) {
    return "Right angle.";
  }
  if(angle < 180) {
    return "Obtuse angle.";
  }
  return "Straight angle.";
}

console.log(angle(47))
console.log(angle(90))
console.log(angle(145))
console.log(angle(180))

