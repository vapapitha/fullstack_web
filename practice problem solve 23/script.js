
function test(x, y) {

  if ((x==8)|| (y==8)) {
    return true
  }
  if ((x+y)==8 || Math.abs (x-y) == 8) {
    return true
  }
  
 

  else {
    return false
  }
}
test(8,9);


 