// build time:Wed Apr 15 2020 14:52:53 GMT+0800 (GMT+08:00)
window.onload=function(){var a=document.getElementById("canvas");var r=a.getContext("2d");var t=window.screen;var o=a.width=t.width;var n=a.height;a.width=o;a.height=n;var h=12;var e=Math.floor(o/h);var l=[];for(var v=0;v<e;v++){l.push(0)}var i="WELCOME TO WWW.SLBLOG.GA9:51 2020/3/13";function f(){r.fillStyle="rgba(238,238,238,.08)";r.fillRect(0,0,o,n);r.font="600 "+h+"px  Georgia";r.fillStyle=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"][parseInt(Math.random()*10)];for(var t=0;t<e;t++){var v=Math.floor(Math.random()*i.length);var f=t*h;var d=l[t]*h;r.fillText(i[v],f,d);if(d>=a.height&&Math.random()>.99){l[t]=0}l[t]++}}function d(){var a=Math.floor(Math.random()*256);var r=Math.floor(Math.random()*256);var t=Math.floor(Math.random()*256);return"rgb("+a+","+r+","+t+")"}f();setInterval(f,35)};
//rebuild by neat 