const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        let body = "";
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {


            // Returning the result as a response
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(body);
        });
    }
    else{ // To catch bad requests
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('Invalid API Request');
    }
});


server.listen(3000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});