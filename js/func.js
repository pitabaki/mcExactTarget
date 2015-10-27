/*

Functional JavaScript for Exact Target instructional document
Developed by: Peter Berki

*/
function init(){
	var code = document.getElementById("code").innerHTML,
		howMany = 0,
		empty = [],
		spanClass = "<span class='perc'>" + code[1] + "</span>";
	for(var i = 0; i< code.length; i++){
		if(code[i] === "%"){
			empty.push(spanClass);
		}else{
			empty.push(code[i]);
		}
	}
	document.getElementById("code").innerHTML = "";
	for(var g = 0; g<code.length; g++){
		document.getElementById("code").innerHTML += empty[g];
	}
	console.log(empty);
}
window.onload = init;