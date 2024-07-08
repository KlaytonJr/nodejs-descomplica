import { createServer } from 'http';

createServer(function(req, res) {
    res.write('Hello world');
    return res.end();
}).listen(8080);