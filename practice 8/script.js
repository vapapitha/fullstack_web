function cal(){
	var a = parseInt(document.getElementById("value1").value);
	var b = parseInt(document.getElementById("value2").value);
	var op =document.getElementById("operator").value;
	var calculate;

if(op == "add"){
	calculate = a + b;
}
if(op == "min"){
	calculate = a - b;
}
if(op == "div"){
	calculate = a / b;
}
if(op == "mul"){
	calculate = a * b;
}
document.getElementById("result").value = calculate;

// document.all[19].value = calculate;
}