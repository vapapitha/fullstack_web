// Write a JavaScript program to add two digits of a given positive integer of length two.

function add(n){
      return n % 10 + Math.floor(n / 10);
   }
add(25)