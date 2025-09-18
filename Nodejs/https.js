// Importamos el módulo 'http' de Node.js
// Este módulo permite crear servidores web básicos que usan el protocolo HTTP.
const http = require("http");

// Creamos el servidor HTTP con createServer.
// La función recibe un "callback" con los objetos req (request, petición del cliente)
// y res (response, respuesta del servidor).
const server = http.createServer((req, res) => {
  
  // Si la URL solicitada es "/"
  if (req.url === "/") {
    // Establecemos el código de estado 200 (OK)
    // y el encabezado Content-Type como texto plano.
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    // Respondemos con un simple "Hola Mundo".
    res.end("Hola Mundo");

  // Si la URL solicitada es "/api"
  } else if (req.url === "/api") {
    // Respuesta con código 200 y tipo de contenido JSON
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    // Devolvemos un objeto convertido en JSON
    // Contiene un mensaje y la fecha/hora actual en formato ISO.
    res.end(
      JSON.stringify({
        message: "Bienvenidos a la API",
        timestamp: new Date().toISOString(),
      })
    );

  // Si la URL no coincide con ninguna de las anteriores
  } else {
    // Devolvemos código 404 (Not Found)
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    // Enviamos el texto de error
    res.end("Ruta no encontrada");
  }
});

// Definimos el puerto en el que el servidor escuchará las peticiones
const PORT = 3000;

// Iniciamos el servidor en el puerto definido
// y mostramos un mensaje en la consola para confirmar.
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

