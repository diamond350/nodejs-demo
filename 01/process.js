//当前工作目录
console.log(process.cwd());
//E:\webfront\react\node\01

//切换到上级工作目录
process.chdir('..');
console.log(process.cwd());

//E:\webfront\react\node


console.log(process.memoryUsage());
/*{
 rss: 20652032, 常驻内存
 heapTotal: 10522624, 堆的总内存
 heapUsed: 4209680 堆已经使用的内存量
 }
 */

function filter(obj) {
    for (var attr in obj) {
        obj[attr] = (obj[attr] / 1024 / 1024) + 'M';
    }
    return obj;
}

for (var i = 0; i < 3; i++) {

        var arr = [];
        arr.push("" + i);
        console.log(filter(process.memoryUsage()));


}

/*
 { rss: '20.03125M',
 heapTotal: '10.03515625M',
 heapUsed: '4.341377258300781M' }
 { rss: '20.0703125M',
 heapTotal: '10.03515625M',
 heapUsed: '4.362068176269531M' }
 { rss: '20.0703125M',
 heapTotal: '10.03515625M',
 heapUsed: '4.370147705078125M' }
 */
