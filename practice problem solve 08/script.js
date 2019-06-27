function test50 (x,y){

// return ((x||y) == 50) ?"true":"false";
return (x == 50 || y == 50) || ((x+y)==50);

}

console.log(test50 (20,50))

