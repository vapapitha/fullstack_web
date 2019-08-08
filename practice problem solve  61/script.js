function con(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
  }
  
  console.log(con("PHP","JS"));
  console.log(con("A","B"));
  console.log(con("AA","BB"));
  