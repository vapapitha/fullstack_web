function test (x) {
    if(x < 90){
        return "Acute angle"
    }
    else if(x == 90){
        return "Right angle"
    }
    else if(x > 90 && x < 180 ){
        return "Obtuse angle"
    }
     else if(x == 180){
        return "Straight angle"
    }
   }

   console.log(test (10));
   console.log(test (90));
   console.log(test (134));
   console.log(test (180));