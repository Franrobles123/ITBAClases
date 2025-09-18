const preferenciasUsuario = {
    tema: 'oscuro', 
    idioma: 'es', 
    notificaciones: true
}

const btnguardar = document.querySelector('#btn-guardar');
const btncargar = document.querySelector('#btn-cargar');

btnguardar.addEventListener("click", () => {
    const preferenciasString = JSON.stringify(preferenciasUsuario);
    // Guardamos en localStorage
    localStorage.setItem("misPreferencias", preferenciasString);
    // Aviso
    alert("Preferencias guardadas ✅");
});

btncargar.addEventListener("click", () => {
    const preferenciasGuardadas = localStorage.getItem("misPreferencias");
    if (preferenciasGuardadas) {
    const obj = JSON.parse(preferenciasGuardadas);
    alert("Preferencias cargadas: " + JSON.stringify(obj, null, 2));
    console.log("Objeto cargado:", obj);
    } else {
    alert("No hay preferencias guardadas todavía.");
    }
});