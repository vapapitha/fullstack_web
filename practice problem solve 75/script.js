// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.


function check(x, y) {

  if (((x > 40) && (x < 60) && (y > 40) && (y < 60))) {
    if (x==y) {
      return "Numbers are the same";
    }
  }

  else if (x > y) {
    return x
  }

  else if (y > x) {
    return y
  }


  
  else{
    return "Numbers don't fit in range";
  }

}
