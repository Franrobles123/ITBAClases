/*
  JSON vs JavaScript

  - JSON (JavaScript Object Notation):
    Es un formato de texto ligero para almacenar e intercambiar datos.
    Se usa principalmente para enviar información entre un servidor y una aplicación web.
    Está basado en la sintaxis de objetos de JavaScript, 
    pero es solo un formato de texto (no código ejecutable).
    Ejemplo de JSON:
    {
      "nombre": "Sofía",
      "edad": 25,
      "activo": true
    }

  - JavaScript:
    Es un lenguaje de programación.
    Con JavaScript podemos crear variables, funciones, lógica, interactuar con el DOM, etc.
    Ejemplo de objeto en JavaScript:
    const persona = {
      nombre: "Sofía",
      edad: 25,
      activo: true
    };

  DIFERENCIA PRINCIPAL:
  - JSON = solo un formato de texto (datos).
  - JavaScript = lenguaje de programación que puede usar esos datos para hacer cosas.

const configuracionJSON = {
  "tema": "oscuro",
  "notificaciones": true,
  "volumen": 75
}; 

console.log("Configuración en JSON:", configuracionJSON);
const configText = JSON.stringify(configuracionJSON); // Convertir a texto JSON
localStorage.setItem("configuracion", configText); // Guardar en localStorage


console.log("Configuración como texto JSON:", configText);
const configObj = JSON.parse(configText); // Convertir de texto JSON a objeto JavaScript
console.log("Configuración convertida de nuevo a objeto JavaScript:", configObj);
*/
// try/catch: Red de seguridad para tu código

// Servidor necesito que traigas el producto llamado silla y que venga 
// con todos sus propiedades
// Palabra clave:
// Che servidor, esto es una imagen

// El servidor recibe todo eso. 
// El servidor recibe la palabra clave que no es
// El servidor no esta preparando para trabajar con imagenes. 

// Usando esto te das cuenta en que momento fallo.
console.log('1. Programa empieza');

try {
    // Código que PUEDE fallar
    console.log('2. Intentando algo riesgoso...');

    const datos = JSON.parse('{"nombre": "Mesa"}'); // Esto funciona
    console.log('3. Datos:', datos.nombre);

    const datosMalos = JSON.parse('texto inválido'); // Esto falla
    console.log('4. Esta línea nunca se ejecuta');
    }
catch (error) { 
    // Solo se ejecuta SI hay error
    console.log('5. Error atrapado:', error.message);
    confirm("No trajo ")
}
console.log('6. Programa continúa normal');