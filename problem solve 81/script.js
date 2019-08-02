
function add_two_digits(n)
{
    var a = n % 10;
    var b = Math.floor(n / 10);
   return a + b;
}
console.log(add_two_digits(25))
console.log(add_two_digits(50))





// function add_two_digits(n)
//    {
//       return n % 10 + Math.floor(n / 10);
//    }
// console.log(add_two_digits(25))
// console.log(add_two_digits(50))
