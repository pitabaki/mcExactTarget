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

		//Function modifies passed variables
		function rest(word, res){
			res += word + "</span>";
			return res;
		}

		//modify symantic class (class for single elements)
		sngCl += chars[0] + "</span>";
		//variables for word lengths. Add to i in for loop.
		var sixChars = chars[2].length - 1,
			fiveChars = chars[3].length - 1,
			fourChars = chars[4].length - 1;

		//Loop through returned HTML and apply <span> class
		for(var i = 0; i < ref.length; i++){

			//Variables used to check for matched characters at index number indicated below.
			var g = i + 1,
				h = i + 2,
				m = i + 5;
			if((ref[i] === chars[1][0]) && (ref[g] === chars[1][1])){
				blank.push(rest(chars[1],dblCl));
				i = i + 1;
			}else if((ref[i] === chars[2][0]) && (ref[m] === chars[2][5])){
				blank.push(rest(chars[2],dblCl));
				i = i + sixChars;
			}else if((ref[i] === chars[3][0]) && (ref[h] === chars[3][2])){
				blank.push(rest(chars[3],dblCl));
				i = i + fiveChars;
			}else if((ref[i] === chars[4][0]) && (ref[h] === chars[4][2])){
				blank.push(rest(chars[4],dblCl));
				i = i + fourChars;
			}else if((ref[i] === chars[5][0]) && (ref[h] === chars[5][2])){
				blank.push(rest(chars[5],dblCl));
				i = i + fourChars;
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
		syntax = ["%","if","elseif","endif","else","then"],
		empty = [],
		restClass = "<span class='if-else'>",
		symClass = "<span class='perc'>";

	/*for(var z = 0; z < code.length; i++){

	}*/

	//func.singleOper('%',empty,code,percClass);
	//call function for multiple operators
	func.multiOper(syntax,empty,code,symClass,restClass);
	document.getElementById("code").innerHTML = "";
	for(var g = 0; g<code.length; g++){
		if(typeof empty[g] !== "undefined"){
			document.getElementById("code").innerHTML += empty[g];
		}
	}
	return false;
}
window.onload = init;