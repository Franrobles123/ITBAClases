
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Bienvenido al servidor de Mueblería Jota</h1>");

  } else if (req.url === "/productos") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h2>Nuestro catálogo de producto</h2>");

  } else if (req.url === "/contacto") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<p>Contáctanos al 555-1234</p>");

  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Página no encontrada");
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
