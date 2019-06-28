
function test(x, y,z) {

  if (((x < 100) && (x > 50)) && ((y > 50) && (y < 100)) && ((y > 50) && (y < 100))) {
    return true
  }

  else {
    return false
  }
}
console.log(test(70,90, 80));
