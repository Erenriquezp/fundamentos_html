function guardar() {
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;

    const arregloErrores = [];
    
    if (nombre === "") {
        arregloErrores.push("El campo Nombre es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_nombre");
        
    }
    
    let apellido = document.getElementById("id_apellido").value;
    if (apellido === "") {
        arregloErrores.push("El campo Apellido es obligatorio.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_apellido");
    }
    
    let email = document.getElementById("id_email").value;
    if (!validarEmail(email)) {
        arregloErrores.push("El campo Email no es válido.");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_email");
    }

}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "*";
}

function limpiarMensaje() {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const error_asterisco = document.querySelectorAll(".error_asterisco");
    error_asterisco.forEach(e => e.innerText = "");
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}