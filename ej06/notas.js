function agregarTarea() {
    var tarea = document.getElementById("task").value;
    if (tarea === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    var lista = document.getElementById("listaTareas");
    var nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = tarea + " <button onclick='eliminarTarea(this)'>Eliminar</button>";
    lista.appendChild(nuevaTarea);

    document.getElementById("task").value = "";
}

function eliminarTarea(btn) {
    var tarea = btn.parentNode;
    tarea.remove();
}