function process (){
    var age =parseFloat(document.getElementById("age").value);
    var day = (age * 365.25) + " days";
    document.getElementById("day").value = day
}