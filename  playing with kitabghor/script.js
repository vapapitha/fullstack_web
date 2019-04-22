var logo=document.querySelector(".logo");
logo.setAttribute("src","https://r.hswstatic.com/w_907/gif/tesla-cat.jpg")

logo.style.width="200px";

logo.style.height="100px";

var links=document.getElementsByTagName("a")


for (var i=0; i<links.length; i++){
    console.log (links[i].textContent)
}


for (var i=0; i<links.length; i++){
    links[i].style.border="1px solid black"
    links[i].style.background="red"
}

