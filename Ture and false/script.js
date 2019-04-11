
var x= 3;
var y=8;
(x=="3" || x===y)
// true

var x= 3;
var y=8;
!(y!=8 && x<=y)
// true

var x= 3;
var y=8;
!(x=="3" || x===y) && 
!(y!=8 && x<=y)
//  false

var x= 3;
var y=8;
!(!(x=="3" || x===y) && 
!(y!=8 && x<=y))
//  true


var x ="";
var y ="haha!";
var z ="false";
!((x||y)&& z)

// false