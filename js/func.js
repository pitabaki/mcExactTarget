/*

Functional JavaScript for Exact Target instructional document
Developed by: Peter Berki

*/
function init(){
	var code = document.getElementById("code").innerHTML,
		howMany = 0,
		spanClass = "<span class='something'>" + code[1] + "</span>";
	/*for(var i = 0; i<= code.length; i++){
		if(code[i] === "%"){
			var rst = code.replace(code[i],spanClass);
			document.getElementById("code").innerHTML[i] = rst;
			howMany += 1;

		}
	}*/
	var rst = code.replace(code[1],spanClass);
	document.getElementById("code").innerHTML = rst;
	console.log(code);
}
window.onload = init;