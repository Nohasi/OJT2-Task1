const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        let body = "";
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            postedData = JSON.parse(body);
            //console.log(postedData);
            // Catch clauses
            if(!postedData.hasOwnProperty('text')){
                res.writeHead(406, {'Content-type': 'application/json'});
                res.end('{"error": "Parameter is missing or incorrect"}');
                return
            }
            if(postedData.text.length === 0){
                res.writeHead(406, {'Content-type': 'application/json'});
                res.end('{"error": "No text is passed"}');
                return
            }

            // split() returns an array of all words, length = # of words
            // /\s+/ is regex that finds words regardless of # of spaces
            const wordArray = postedData.text.split(/\s+/);

            // statement to catch the special case of having only spaces
            if(wordArray[0] === "" && wordArray [1] === ""){
                res.writeHead(200, {'Content-type': 'application/json'});
                res.end('{"count": 0}');
            return
            }

            // Returning the result after all checks
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(`{"count": ${wordArray.length}}`);
        });
    }
    else{ // To catch bad requests
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('Invalid API Request');
    }
});

server.listen(3001, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});