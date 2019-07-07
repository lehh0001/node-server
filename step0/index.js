var http = require('http')

var server = http.createServer(function(req,res){
  console.log('玫瑰');
  res.setHeader("Content-Type","text/plain; charset=gbk-8")
  res.write('<h1>赵文乐<h1>')
  res.end()
})

server.listen(8090)
console.log('visit http://localhost:8080' )























// var server = http.createServer(function(req, res){
//   console.log(__dirname + '/static' + req.url)
//   var fileContent = fs.readFileSync(__dirname + '/static' + req.url,'binary')
//   res.write(fileContent,'binary')
//   res.end()
// })















// var server = http.createServer(function(req,res){
//   console.log('玫瑰');
//   res.setHeader("Content-Type","text/plain; charset=gbk-8")
//   res.write('<h1>赵文乐<h1>')
//   res.end()
// })
// server.listen(8090)