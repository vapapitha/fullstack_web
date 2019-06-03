function process (){
    var lbsvar =parseFloat(document.getElementById("dollar").value);
    var kgsvar = lbsvar*0.79;
    document.getElementById("pound").value = kgsvar
}