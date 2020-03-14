// build time:Fri Mar 13 2020 20:27:52 GMT+0800 (GMT+08:00)
var total=5e4,count=0,pace=require("../")({total:total,showBurden:true,maxBurden:.5});while(count++<total){pace.op();for(var i=0;i<1e6;i++){count=count}}
//rebuild by neat 