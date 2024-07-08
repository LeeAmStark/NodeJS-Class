// var userName = 'Polly'
const http = require('http');

const server = http.createServer(function(request, response){
    console.log(request);
    response.end('Hello World. Server running on PORT 5000');
});

server.listen(5000, function(){
    console.log('Server runnning on PORT 5000')
})