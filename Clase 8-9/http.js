const http = require('http');
const servidor = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <h1>Bienvenidos a mi servidor</h1>
            <p>Este es un servidor HTTP creado con Node.js</p>
        `)
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`error 404: recurso no encontrado`);
    }
});

servidor.listen(3000, () => {   
    console.log('Servidor escuchando en el puerto 3000');
});