// build time:Wed Feb 26 2020 20:35:02 GMT+0800 (GMT+08:00)
$(function(){if(mihoConfig.isHome===true&&document.body.clientWidth>700){var e=["pulse","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],a=e.length,n=e[Math.ceil(Math.random()*a)-1];window.sr=ScrollReveal();sr.reveal("#header-row",{duration:0,afterReveal:function(e){$(e).addClass("animated "+n)}});sr.reveal(".body-wrap > article",{duration:0,afterReveal:function(e){$(e).addClass("animated "+n)}})}});
//rebuild by neat 