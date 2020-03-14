// build time:Fri Mar 13 2020 20:27:52 GMT+0800 (GMT+08:00)
var total=5e4,current=0,pace=require("../")(total);while(current++<total){if(Math.random()>.9){pace.op(current)}if(Math.random()<.05&&total<=5e4){total+=Math.floor(Math.random()*100);pace.total=total}for(var i=0;i<1e6;i++){current=current}}
//rebuild by neat 