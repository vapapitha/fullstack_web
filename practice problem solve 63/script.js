function middle(str) {
  if (str.length % 2!= 0) {
  
   mid = (str.length + 1)/2;
   return str.slice(mid - 2, mid + 1);
   }
 return str;
}
console.log(middle('abcdefg'));
c