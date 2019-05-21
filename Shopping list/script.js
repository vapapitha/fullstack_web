// var button = document.getElementsByTagName("button")[0]; 

// button.addEventListener("click",function(){
//     console.log("chick!!!")
// })
var button = document.getElementById("enter"); 
var input = document.getElementById("enterInput"); 
var ul = document.querySelector("ul");

button.addEventListener("click",function(){
    if(input.value.length>0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
    }
   
})