/*

Functional JavaScript for Exact Target instructional document
Developed by: Peter Berki

*/
var func = {
	singleOper: function(sglChar,blank,ref,cl){
		'use strict';
		cl += sglChar + "</span>";
		for(var i = 0; i< ref.length; i++){
			if(ref[i] === sglChar){
				blank.push(cl);
			}else{
				blank.push(ref[i]);
			}
		}
	},// END SINGLEOPER
	multiOper: function(chars,blank,ref,sngCl,dblCl){
		'use strict';
		var longWord = chars[2].length - 1,
			trpCl = dblCl;
		trpCl += chars[2] + "</span>";
		dblCl += chars[1] + "</span>";
		sngCl += chars[0] + "</span>";
		for(var i = 0; i < ref.length; i++){
			var g = i + 1;
			var h = i + 2;
			if((ref[i] === chars[1][0]) && (ref[g] === chars[1][1])){
				blank.push(dblCl);
				i = i + 1;
			}else if((ref[i] === chars[2][0]) && (ref[g] === chars[2][1]) && (ref[h] === chars[2][2])){
				blank.push(trpCl);
				i = i + longWord;
			}else if(ref[i] === chars[0][0]){
				blank.push(sngCl);
			}else{
				blank.push(ref[i]);
			}
		}
	}

};
function init(){

	//Define all initial variables
	//identifiers = all words you'd like to query
	var code = document.getElementById("code").innerHTML,
		howMany = 0,
		Many = 0,
		identifiers = ["%", "if", "elseif"],
		empty = [],
		ifClass = "<span class='if-else'>",
		percClass = "<span class='perc'>";
	console.log(code);
	/*for(var z = 0; z < code.length; i++){

	}*/
	//func.singleOper('%',empty,code,percClass);
	//call function for multiple operators
	func.multiOper(identifiers,empty,code,percClass,ifClass);
	document.getElementById("code").innerHTML = "";
	for(var g = 0; g<code.length; g++){
		document.getElementById("code").innerHTML += empty[g];
	}
	console.log(empty);
	var george = document.getElementById("code").innerHTML;
	for(var d = 0; d < george.length; d++){
		var x = d + 1;
		if((george[d] === "u") && (george[x] === "n")){
			howMany ++;
		}else if(george[d] === "%"){
			Many ++;
		}
	}
	console.log(howMany);
	console.log(Many);
}
window.onload = init;