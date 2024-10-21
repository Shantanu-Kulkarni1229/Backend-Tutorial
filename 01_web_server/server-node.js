const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Removed extra space
    res.end("Helloo ice tea");
} else if (req.url === '/ice-tea')
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Removed extra space
    res.end("Helloo ice tea its hot!!");
}
});

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
});
