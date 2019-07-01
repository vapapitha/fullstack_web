
// Correction of 18 no folder

function check(x, y) {

  if ( ((x>40) && (x<60)) &&
  ((y>40) && (y<60))
  ) {
    if (x==y) {
      return "Numbers are the same";
    }else if (x > y){
      return x;
      }else{
      return y;
      }
  }else{
      return "Numbers don't fit in range";
    }

}
