// build time:Sat Mar 28 2020 17:00:00 GMT+0800 (GMT+08:00)
var OriginTitle=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/funny.ico");document.title="╭(°A°`)╮ 页面崩溃啦 ~";clearTimeout(titleTime)}else{$('[rel="icon"]').attr("href","/favicon.ico");document.title="(ฅ>ω<*ฅ) 噫又好啦 ~"+OriginTitle;titleTime=setTimeout(function(){document.title=OriginTitle},2e3)}});
//rebuild by neat 