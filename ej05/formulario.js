function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;

    if (nombre === "" || correo === "" || contraseña === "") {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    return true;
}