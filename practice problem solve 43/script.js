
// find out last three digit 

function lastDisit(str){

var str1 =  str.charAt(str.length - 3);
var str4 = str.indexOf(str1 );
var str2 = str.substring(str4, str.length);
return str2 

}

lastDisit("hello")


