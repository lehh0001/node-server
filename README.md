# node-server
<!-- nodejs server需要依赖的几个重要模块：
1. express:
nodejs的Web应用框架，如下创建一个基本的express程序
var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('hello world');
});
app.listen(8080);

2. bodyParser：
express默认使用的模块，用于解析http请求，
app.use(bodyParser.urlencoded({ extended: false }));
     //用于解析req.body数据

3. mysql：
nodejs需要依赖的数据库模块。
解决跨域请求
app.all('*', function(req, res, next) {
    //允许的来源
    res.header("Access-Control-Allow-Origin", "*");
    //允许的头部信息，如果自定义请求头，需要添加以下信息，允许列表可以根据需求添加
    res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    //允许的请求类型
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});

解析请求信息
1. 路由
app.VERB(path, [callback...], callback)
app.VERB() 方法为Express提供路由方法, VERB 是指某一个HTTP 动作, 比如 app.get()。例如
app.get('/', function(req, res, next){
  res.send('hello world');
});

路径字符串会被转为正则表达式，当接收到get请求之后，Express会将请求路径与该正则表达式比较，符合条件的会执行回调方法。
2. 解析请求参数
get请求
app.get('/', function(req, res, next) {
    var querys = req.query || {};//获取get请求的请求参数
    var query = req.originalUrl;//获取请求url
    res.send('hello world');
});

post请求
app.post('/', function(req, res, next) {
    var body = req.body;//获取post请求的请求参数
    var query = req.originalUrl;//获取请求url
    res.send('hello world');
});

响应请求
res.send([body|status], [body])方法用于返回信息，status默认为200，例如
res.send({});
res.send([]);
res.send("");
res.send(404,'{"errno":"10001", "errmsg":"访问页面或者接口不存在！"}')

与数据库交互
1. 与数据库建立连接
connection = mysql.createConnection({
        host: '',
        user: 'root',
        password: '******',
        database: 'test'
    });
    connection.connect();

2. 执行sql语句
connection.query("sql",[params], function(err, result, fields){});

var table = "table";//要查询的数据表
var query = "/test"; //path参数
var sql = 'select content from '+table+' where path = ' +'"'+ query +'"';
connection.query(sql,function(err, result, fields){
    if(err){
        //失败，执行异常处理
    }else{
        //成功，返回请求信息
        var firtRow = result[0] || {};//result为数据库检索结果
    }
});

再如

var table = "table";//要查询的数据表
var params = ["/test","post","1"];
var sql = 'UPDATE ' + table + ' SET path = ?, sendtype = ?, WHERE id = ?';
connection.query(sql, params, function(err, result){
    if(err){
        //失败，执行异常处理
    }else{
        //成功，返回请求信息
    }
});

注意：数据库检索结果是以键值对的形式返回的，例如
'select content from table where id=1'
//返回的结果信息为
"content":"testcontent"
从数据库获取信息之后需要进行处理才能返回到客户端。
3. 断开连接
connection.end();
每次执行sql语句之后，最好断开与数据库的连接，下次再执行的时候再重新建立连接。
参考链接：Express - api参考
ps: http-server 是简单的零配置命令行HTTP服务器, 基于 nodeJs.
如果不想重复的写 nodeJs 的 web-server.js, 则可以使用
安装 (全局安装加 -g) :    npm install http-server
Windows 下使用:
在站点目录下开启命令行输入
http-server
访问: http://localhost:8080 or http://127.0.0.1:8080
使用于package.json
"scripts": {
"start": "http-server -a 0.0.0.0 -p 8000",
}
参数 :


-p 端口号 (默认 8080)

-a IP 地址 (默认 0.0.0.0)

-d 显示目录列表 (默认 'True')

-i 显示 autoIndex (默认 'True')

-e or --ext 如果没有提供默认的文件扩展名(默认 'html')

-s or --silent 禁止日志信息输出

--cors 启用 CORS via the Access-Control-Allow-Origin header

-o 在开始服务后打开浏览器

-c 为 cache-control max-age header 设置Cache time(秒) , e.g. -c10 for 10 seconds (defaults to '3600'). 禁用 caching, 则使用 -c-1.

-U 或 --utc 使用UTC time 格式化log消息

-P or --proxy Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com

-S or --ssl 启用 https

-C or --cert ssl cert 文件路径 (default: cert.pem)

-K or --key Path to ssl key file (default: key.pem).

-r or --robots Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')

-h or --help 打印以上列表并退出 http-server 是一个简单的零配置命令行HTTP服务器, 基于 nodeJs -->
