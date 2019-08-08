function three(str) {
  if (str.length > 1)
    {
      return str.slice(-3) + str.slice(0, -3);
    }
return str;
}
console.log(three("Python"));