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
		//Modify passed variables
		var longWord = chars[2].length - 1,
			trpCl = dblCl;
		trpCl += chars[2] + "</span>";
		dblCl += chars[1] + "</span>";
		sngCl += chars[0] + "</span>";
		console.log("longword is " + longWord);
		//Loop through returned HTML and apply <span> class
		for(var i = 0; i < ref.length; i++){
			var g = i + 1,
				h = i + 2,
				j = i + 3,
				m = i + 4;
			if((ref[i] === chars[1][0]) && (ref[g] === chars[1][1])){
				blank.push(dblCl);
				i = i + 1;
			}else if((ref[i] === chars[2][0]) && (ref[g] === chars[2][1]) && (ref[h] === chars[2][2]) && (ref[j] === chars[2][3]) && (ref[m] === chars[2][4])){
				blank.push(trpCl);
				i = i + longWord;
			}else if(ref[i] === chars[0][0]){
				blank.push(sngCl);
			}else{
				if(typeof ref[i] !== "undefined"){
				blank.push(ref[i]);
			}
			}
		}
		return true;
	}

};
function init(){
	'use strict';
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
		if(typeof empty[g] !== "undefined"){
			document.getElementById("code").innerHTML += empty[g];
		}
	}
	console.log(document.getElementById("code").innerHTML);
	console.log(empty);
	console.log(Many);
	return false;
}
window.onload = init;