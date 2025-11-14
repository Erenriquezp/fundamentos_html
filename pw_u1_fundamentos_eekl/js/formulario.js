function guardar() {
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;

    const arregloErrores = [];
    
    if (nombre === "") {
        arregloErrores.push("El campo Nombre es obligatorio.\n");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_nombre"); 
    }
    
    let apellido = document.getElementById("id_apellido").value;
    if (apellido === "") {
        arregloErrores.push("El campo Apellido es obligatorio.\n");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_apellido");
    }
    
    let email = document.getElementById("id_email").value;
    if (!validarEmail(email)) {
        arregloErrores.push("El campo Email no es válido.\n");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_email");
    }

    let password = document.getElementById("id_password").value;
    if (password.length < 6) {
        arregloErrores.push("El campo Password debe tener al menos 6 caracteres.\n");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_password");
    }

    let fecha = document.getElementById("id_fecha").value;
    if (fecha === "") {
        arregloErrores.push("El campo Fecha de Nacimiento es obligatorio.\n");
        mostrarMensaje(arregloErrores);
        mostrarAsterisco("id_error_fecha");
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