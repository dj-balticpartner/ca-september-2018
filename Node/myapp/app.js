const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-type','json');
    //console.log('request just came in!');
    res.end('{name:"Jonas",lastname: "Kirkilas"}');
});

server.listen(port, hostname, () => {
    console.log('Server started on port' + port);
});