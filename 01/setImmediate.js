setTimeout(function(){
    console.log('setTimeout');
},1000);


setImmediate(function(){
    console.log('setImmediate');
});

/*
输出结果：
setImmediate
setTimeout
*/
