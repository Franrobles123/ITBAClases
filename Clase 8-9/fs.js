const fs = require('fs');

fs.readFile('./Clase 8-9/productos.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error', err.message);
        return;
    }
    console.log(data);
});
