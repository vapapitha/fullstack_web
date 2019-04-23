

var button= document.querySelector("Button"); 
var isYellow=false

button.addEventListener("click",function() {
    if(isYellow){
            document.body.style.background = "yellow";}
    
    else 
        {document.body.style.background = "yellow";}
    isYellow=!isYellow
    })


//     if white then make it yeolow
// else make it white