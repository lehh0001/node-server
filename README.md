1、终端先cd到对应的目录下  
2、添加内置模块http  通过require加载一个模块  
3、创建一个服务器，里面有回调，把函数作为对应的参数来处理我们的请求
req （ip/域名/）
res（需要返回给用户哪一个对象）  
4、通过listen 来启动node服务器（服务启动后会有一个等待时间，需要去页面测试刷新）  
5、http://localhost:8080  （127.0.0.1）页面会进入到逻辑
