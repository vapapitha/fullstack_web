// For loop
var temperature=prompt("what is Temperature in your area?")

if (temperature<=9 && temperature>=1){
    alert("It is very Cold")
}
else if (temperature>50){
    alert("It is very Hot")
}
else if (temperature<=30 && temperature >=20 ){
    alert("Average Temparature ")
}
else if (temperature<=50 && temperature >=31 ){
    alert("It is pretty Hot ")
}
else if (temperature<=20 && temperature >=10 ){
    alert("It is pretty cold  ")
}
else {
    alert("your result ERROR")}