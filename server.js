var http = require ('http'); 
var PORT = 8090
http.createServer(function(req,res)
{
    res.write('Hello World');
    res.end();

}).listen(PORT);

console.log('Running on http://localhost:' + PORT);