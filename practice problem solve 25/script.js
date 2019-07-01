function number(x, y, z ) {
  if ( y > x && z > y) 
  {
    return "strict mode";    
  }
  else if(z > y) 
   return "Soft mode";
  else
    return "Undefinded";
}

number(10,15,31);
number(24,22,31);
number(50,21,15);