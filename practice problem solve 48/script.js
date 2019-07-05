// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.



function near_100(x, y) {

    x1 = Math.abs(100 - x);
    y1 = Math.abs(100 - y);

    if (x == y){
        return false;
    }
    else if (x1 < y1)
    {
      return x;
    }else{
        return y;}
  }
  
  console.log(near_100(90, 89));
  console.log(near_100(-90, -89));
  console.log(near_100(90, 90));
  







