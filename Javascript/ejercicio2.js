const prompt = require("prompt-sync")(); // importa la librería
const Contrasenacorrecta= "Jota123";

function verificarcontrasena(){
    const contrasenaIngresada = prompt("Ingrese su contraseña:");
    if(contrasenaIngresada==Contrasenacorrecta){
        alert("Acceso correcto");
    }
    else if(contrasenaIngresada=="")
    {
        alert("No se ingresó ninguna contraseña");
    }
    else{
        alert("Contraseña incorrecta. Acceso denegado");
    }

}
verificarcontrasena();