/**
 * 把任务放在当前队列的尾部
 *
 **/
setTimeout(function () {
    console.log("timeout");
},500);
setImmediate(function(){
    console.log('dd');
})
process.nextTick(function(){
    console.log('a');
    setImmediate(function(){
        console.log('ff');
        process.nextTick(function(){
            console.log('b');
        });
    })

});
/*
 a
 dd
 ff
 b
 timeout
*/
