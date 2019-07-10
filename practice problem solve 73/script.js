function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}




max_of_three(89, 63,29);
max_of_three(44, 56 , 10);
max_of_three(70, 48, 95);
  