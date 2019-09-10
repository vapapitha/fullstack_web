//correctly include jQuery

 if(jQuery){
     alert("jQuery work perfect")
 }else{
     alert("jQuery don't work")
}

//select div and give them  a background color
$("div").css("background","red");

//select class and resize them

$("div.highlight").css("width","200px");

//select id and give a border 


$("#third").css("border","10px solid purple");


//select first div and give blue color 


$("div:first-of-type").css("color","blue");