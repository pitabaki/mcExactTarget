function init(){var n=document.getElementById("code").innerHTML,e=0,o=0,t=["%","if","elseif"],s=[],l="<span class='if-else'>",r="<span class='perc'>";console.log(n),func.multiOper(t,s,n,r,l),document.getElementById("code").innerHTML="";for(var c=0;c<n.length;c++)document.getElementById("code").innerHTML+=s[c];console.log(s);for(var i=document.getElementById("code").innerHTML,u=0;u<i.length;u++){var a=u+1;"u"===i[u]&&"n"===i[a]?e++:"%"===i[u]&&o++}console.log(e),console.log(o)}var func={singleOper:function(n,e,o,t){"use strict";t+=n+"</span>";for(var s=0;s<o.length;s++)o[s]===n?e.push(t):e.push(o[s])},multiOper:function(n,e,o,t,s){"use strict";var l=n[2].length-1,r=s;r+=n[2]+"</span>",s+=n[1]+"</span>",t+=n[0]+"</span>";for(var c=0;c<o.length;c++){var i=c+1,u=c+2;o[c]===n[1][0]&&o[i]===n[1][1]?(e.push(s),c+=1):o[c]===n[2][0]&&o[i]===n[2][1]&&o[u]===n[2][2]?(e.push(r),c+=l):o[c]===n[0][0]?e.push(t):e.push(o[c])}}};window.onload=init;