
// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40


function test(x, y,z) {



  if ((x == y) && (y == z) && (z == x)) {
    return 30;
  }

  else if ((x == y)|| (y == z) || (z == x)) {
    return 40;
  }

  else {
    return 20;
  }
}
test(70,90, 80);

