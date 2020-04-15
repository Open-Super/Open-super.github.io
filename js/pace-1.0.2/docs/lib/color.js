// build time:Wed Apr 15 2020 14:52:53 GMT+0800 (GMT+08:00)
!function(r,t,e){function n(e,s){if(!t[e]){if(!r[e]){var i="function"==typeof require&&require;if(!s&&i)return i(e,!0);if(a)return a(e,!0);throw new Error("Cannot find module '"+e+"'")}var u=t[e]={exports:{}};r[e][0].call(u.exports,function(t){var a=r[e][1][t];return n(a?a:t)},u,u.exports)}return t[e].exports}for(var a="function"==typeof require&&require,s=0;s<e.length;s++)n(e[s]);return n}({1:[function(r){Color=r("./color")},{"./color":2}],2:[function(r,t){var e=r("color-convert"),n=r("color-string");t.exports=function(r){return new a(r)};var a=function(r){if(this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],cmyk:[0,0,0,0],alpha:1},"string"==typeof r){var t=n.getRgba(r);t?this.setValues("rgb",t):(t=n.getHsla(r))&&this.setValues("hsl",t)}else if("object"==typeof r){var t=r;void 0!==t.r||void 0!==t.red?this.setValues("rgb",t):void 0!==t.l||void 0!==t.lightness?this.setValues("hsl",t):void 0!==t.v||void 0!==t.value?this.setValues("hsv",t):(void 0!==t.c||void 0!==t.cyan)&&this.setValues("cmyk",t)}};a.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var r=this.values.rgb;return r.concat([this.values.alpha])},hslaArray:function(){var r=this.values.hsl;return r.concat([this.values.alpha])},alpha:function(r){return void 0===r?this.values.alpha:(this.setValues("alpha",r),this)},red:function(r){return this.setChannel("rgb",0,r)},green:function(r){return this.setChannel("rgb",1,r)},blue:function(r){return this.setChannel("rgb",2,r)},hue:function(r){return this.setChannel("hsl",0,r)},saturation:function(r){return this.setChannel("hsl",1,r)},lightness:function(r){return this.setChannel("hsl",2,r)},saturationv:function(r){return this.setChannel("hsv",1,r)},value:function(r){return this.setChannel("hsv",2,r)},cyan:function(r){return this.setChannel("cmyk",0,r)},magenta:function(r){return this.setChannel("cmyk",1,r)},yellow:function(r){return this.setChannel("cmyk",2,r)},black:function(r){return this.setChannel("cmyk",3,r)},hexString:function(){return n.hexString(this.values.rgb)},rgbString:function(){return n.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return n.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return n.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return n.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return n.hslaString(this.values.hsl,this.values.alpha)},keyword:function(){return n.keyword(this.values.rgb,this.values.alpha)},luminosity:function(){for(var r=this.values.rgb,t=[],e=0;e<r.length;e++){var n=r[e]/255;t[e]=.03928>=n?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var t=this.luminosity(),e=r.luminosity();return t>e?(t+.05)/(e+.05):(e+.05)/(t+.05)},dark:function(){var r=this.values.rgb,t=(299*r[0]+587*r[1]+114*r[2])/1e3;return 128>t},light:function(){return!this.dark()},negate:function(){for(var r=[],t=0;3>t;t++)r[t]=255-this.values.rgb[t];return this.setValues("rgb",r),this},lighten:function(r){return this.values.hsl[2]+=this.values.hsl[2]*r,this.setValues("hsl",this.values.hsl),this},darken:function(r){return this.values.hsl[2]-=this.values.hsl[2]*r,this.setValues("hsl",this.values.hsl),this},saturate:function(r){return this.values.hsl[1]+=this.values.hsl[1]*r,this.setValues("hsl",this.values.hsl),this},desaturate:function(r){return this.values.hsl[1]-=this.values.hsl[1]*r,this.setValues("hsl",this.values.hsl),this},greyscale:function(){var r=this.values.rgb,t=.3*r[0]+.59*r[1]+.11*r[2];return this.setValues("rgb",[t,t,t]),this},clearer:function(r){return this.setValues("alpha",this.values.alpha-this.values.alpha*r),this},opaquer:function(r){return this.setValues("alpha",this.values.alpha+this.values.alpha*r),this},rotate:function(r){var t=this.values.hsl[0];return t=(t+r)%360,t=0>t?360+t:t,this.values.hsl[0]=t,this.setValues("hsl",this.values.hsl),this},mix:function(r,t){t=1-(null==t?.5:t);for(var e=2*t-1,n=this.alpha()-r.alpha(),a=((-1==e*n?e:(e+n)/(1+e*n))+1)/2,s=1-a,i=this.rgbArray(),u=r.rgbArray(),l=0;l<i.length;l++)i[l]=i[l]*a+u[l]*s;this.setValues("rgb",i);var h=this.alpha()*t+r.alpha()*(1-t);return this.setValues("alpha",h),this},toJSON:function(){return this.rgb()}},a.prototype.getValues=function(r){for(var t={},e=0;e<r.length;e++)t[r[e]]=this.values[r][e];return 1!=this.values.alpha&&(t.a=this.values.alpha),t},a.prototype.setValues=function(r,t){var n={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],cmyk:["cyan","magenta","yellow","black"]},a={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],cmyk:[100,100,100,100]},s=1;if("alpha"==r)s=t;else if(t.length)this.values[r]=t.slice(0,r.length),s=t[r.length];else if(void 0!==t[r[0]]){for(var i=0;i<r.length;i++)this.values[r][i]=t[r[i]];s=t.a}else if(void 0!==t[n[r][0]]){for(var u=n[r],i=0;i<r.length;i++)this.values[r][i]=t[u[i]];s=t.alpha}if(this.values.alpha=Math.max(0,Math.min(1,void 0!==s?s:this.values.alpha)),"alpha"!=r){for(var l in n){l!=r&&(this.values[l]=e[r][l](this.values[r]));for(var i=0;i<l.length;i++){var h=Math.max(0,Math.min(a[l][i],this.values[l][i]));this.values[l][i]=Math.round(h)}}return!0}},a.prototype.setSpace=function(r,t){var e=t[0];return void 0===e?this.getValues(r):("number"==typeof e&&(e=Array.prototype.slice.call(t)),this.setValues(r,e),this)},a.prototype.setChannel=function(r,t,e){return void 0===e?this.values[r][t]:(this.values[r][t]=e,this.setValues(r,this.values[r]),this)}},{"color-convert":3,"color-string":4}],3:[function(r,t,e){var n=r("./conversions"),e={};t.exports=e;for(var a in n){e[a+"Raw"]=function(r){return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),n[r](t)}}(a);var s=/(\w+)2(\w+)/.exec(a),i=s[1],u=s[2];e[i]=e[i]||{},e[i][u]=e[a]=function(r){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var e=n[r](t);if("string"==typeof e||void 0===e)return e;for(var a=0;a<e.length;a++)e[a]=Math.round(e[a]);return e}}(a)}},{"./conversions":5}],5:[function(r,t){function e(r){var t,e,n,a=r[0]/255,s=r[1]/255,i=r[2]/255,u=Math.min(a,s,i),l=Math.max(a,s,i),h=l-u;return l==u?t=0:a==l?t=(s-i)/h:s==l?t=2+(i-a)/h:i==l&&(t=4+(a-s)/h),t=Math.min(60*t,360),0>t&&(t+=360),n=(u+l)/2,e=l==u?0:.5>=n?h/(l+u):h/(2-l-u),[t,100*e,100*n]}function n(r){var t,e,n,a=r[0],s=r[1],i=r[2],u=Math.min(a,s,i),l=Math.max(a,s,i),h=l-u;return e=0==l?0:1e3*(h/l)/10,l==u?t=0:a==l?t=(s-i)/h:s==l?t=2+(i-a)/h:i==l&&(t=4+(a-s)/h),t=Math.min(60*t,360),0>t&&(t+=360),n=1e3*(l/255)/10,[t,e,n]}function a(r){var t,e,n,a,s=r[0]/255,i=r[1]/255,u=r[2]/255;return a=Math.min(1-s,1-i,1-u),t=(1-s-a)/(1-a),e=(1-i-a)/(1-a),n=(1-u-a)/(1-a),[100*t,100*e,100*n,100*a]}function s(r){return C[JSON.stringify(r)]}function i(r){var t=r[0]/255,e=r[1]/255,n=r[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var a=.4124*t+.3576*e+.1805*n,s=.2126*t+.7152*e+.0722*n,i=.0193*t+.1192*e+.9505*n;return[100*a,100*s,100*i]}function u(r){var t,e,n,a=i(r),s=a[0],u=a[1],l=a[2];return s/=95.047,u/=100,l/=108.883,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=116*u-16,e=500*(s-u),n=200*(u-l),[t,e,n]}function l(r){var t,e,n,a,s,i=r[0]/360,u=r[1]/100,l=r[2]/100;if(0==u)return s=255*l,[s,s,s];e=.5>l?l*(1+u):l+u-l*u,t=2*l-e,a=[0,0,0];for(var h=0;3>h;h++)n=i+1/3*-(h-1),0>n&&n++,n>1&&n--,s=1>6*n?t+6*(e-t)*n:1>2*n?e:2>3*n?t+6*(e-t)*(2/3-n):t,a[h]=255*s;return a}function h(r){var t,e,n=r[0],a=r[1]/100,s=r[2]/100;return s*=2,a*=1>=s?s:2-s,e=(s+a)/2,t=2*a/(s+a),[n,100*a,100*e]}function o(r){return a(l(r))}function c(r){return s(l(r))}function g(r){var t=r[0]/60,e=r[1]/100,n=r[2]/100,a=Math.floor(t)%6,s=t-Math.floor(t),i=255*n*(1-e),u=255*n*(1-e*s),l=255*n*(1-e*(1-s)),n=255*n;switch(a){case 0:return[n,l,i];case 1:return[u,n,i];case 2:return[i,n,l];case 3:return[i,u,n];case 4:return[l,i,n];case 5:return[n,i,u]}}function v(r){var t,e,n=r[0],a=r[1]/100,s=r[2]/100;return e=(2-a)*s,t=a*s,t/=1>=e?e:2-e,e/=2,[n,100*t,100*e]}function f(r){return a(g(r))}function d(r){return s(g(r))}function p(r){var t,e,n,a=r[0]/100,s=r[1]/100,i=r[2]/100,u=r[3]/100;return t=1-Math.min(1,a*(1-u)+u),e=1-Math.min(1,s*(1-u)+u),n=1-Math.min(1,i*(1-u)+u),[255*t,255*e,255*n]}function y(r){return e(p(r))}function b(r){return n(p(r))}function m(r){return s(p(r))}function k(r){var t,e,n,a=r[0]/100,s=r[1]/100,i=r[2]/100;return t=3.2406*a+-1.5372*s+i*-.4986,e=a*-.9689+1.8758*s+.0415*i,n=.0557*a+s*-.204+1.057*i,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t=12.92*t,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n=12.92*n,t=0>t?0:t,e=0>e?0:e,n=0>n?0:n,[255*t,255*e,255*n]}function w(r){return x[r]}function M(r){return e(w(r))}function S(r){return n(w(r))}function V(r){return a(w(r))}t.exports={rgb2hsl:e,rgb2hsv:n,rgb2cmyk:a,rgb2keyword:s,rgb2xyz:i,rgb2lab:u,hsl2rgb:l,hsl2hsv:h,hsl2cmyk:o,hsl2keyword:c,hsv2rgb:g,hsv2hsl:v,hsv2cmyk:f,hsv2keyword:d,cmyk2rgb:p,cmyk2hsl:y,cmyk2hsv:b,cmyk2keyword:m,keyword2rgb:w,keyword2hsl:M,keyword2hsv:S,keyword2cmyk:V,xyz2rgb:k};var x={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},C={};for(var q in x)C[JSON.stringify(x[q])]=q},{}],4:[function(r,t){function e(r){if(r){var t=/^#([a-fA-F0-9]{3})$/,e=/^#([a-fA-F0-9]{6})$/,n=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*(?:,\s*([\d\.]+)\s*)?\)$/,s=/(\D+)/,i=[0,0,0],u=1,l=r.match(t);if(l){l=l[1];for(var h=0;h<i.length;h++)i[h]=parseInt(l[h]+l[h],16)}else if(l=r.match(e)){l=l[1];for(var h=0;h<i.length;h++)i[h]=parseInt(l.slice(2*h,2*h+2),16)}else if(l=r.match(n)){for(var h=0;h<i.length;h++)i[h]=parseInt(l[h+1]);u=parseFloat(l[4])}else if(l=r.match(a)){for(var h=0;h<i.length;h++)i[h]=Math.round(2.55*parseFloat(l[h+1]));u=parseFloat(l[4])}else if(l=r.match(s)){if("transparent"==l[1])return[0,0,0,0];if(i=y.keyword2rgb(l[1]),!i)return}for(var h=0;h<i.length;h++)i[h]=d(i[h],0,255);return u=u||0==u?d(u,0,1):1,i.push(u),i}}function n(r){if(r){var t=/^hsla?\(\s*(\d+)\s*,\s*([\d\.]+)%\s*,\s*([\d\.]+)%\s*(?:,\s*([\d\.]+)\s*)?\)/,e=r.match(t);if(e){var n=d(parseInt(e[1]),0,360),a=d(parseFloat(e[2]),0,100),s=d(parseFloat(e[3]),0,100),i=d(parseFloat(e[4])||1,0,1);return[n,a,s,i]}}}function a(r){return e(r).slice(0,3)}function s(r){return n(r).slice(0,3)}function i(r){var t=e(r);return t?t[3]:(t=n(r))?t[3]:void 0}function u(r){return"#"+p(r[0])+p(r[1])+p(r[2])}function l(r,t){return 1>t||r[3]&&r[3]<1?h(r,t):"rgb("+r[0]+", "+r[1]+", "+r[2]+")"}function h(r,t){return void 0===t&&(t=void 0!==r[3]?r[3]:1),"rgba("+r[0]+", "+r[1]+", "+r[2]+", "+t+")"}function o(r,t){if(1>t||r[3]&&r[3]<1)return c(r,t);var e=Math.round(100*(r[0]/255)),n=Math.round(100*(r[1]/255)),a=Math.round(100*(r[2]/255));return"rgb("+e+"%, "+n+"%, "+a+"%)"}function c(r,t){var e=Math.round(100*(r[0]/255)),n=Math.round(100*(r[1]/255)),a=Math.round(100*(r[2]/255));return"rgba("+e+"%, "+n+"%, "+a+"%, "+(t||r[3]||1)+")"}function g(r,t){return 1>t||r[3]&&r[3]<1?v(r,t):"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)"}function v(r,t){return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+(t||r[3]||1)+")"}function f(r){return y.rgb2keyword(r.slice(0,3))}function d(r,t,e){return Math.min(Math.max(t,r),e)}function p(r){var t=r.toString(16).toUpperCase();return t.length<2?"0"+t:t}var y=r("color-convert");t.exports={getRgba:e,getHsla:n,getRgb:a,getHsl:s,getAlpha:i,hexString:u,rgbString:l,rgbaString:h,percentString:o,percentaString:c,hslString:g,hslaString:v,keyword:f}},{"color-convert":3}]},{},[1]);
//rebuild by neat 