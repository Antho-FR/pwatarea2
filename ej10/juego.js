const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Ecuador?",
        opciones: ["Londres", "Berlín", "Quito"],
        respuestaCorrecta: "Quito"
    },
    {
        pregunta: "¿Qué se celebra 31 de octubre en Ecuador?",
        opciones: ["Carnaval", "Día del escudo", "Día del árbol"],
        respuestaCorrecta: "Día del escudo"
    },
    {
        pregunta: "¿Animal icónico en Ecuador?",
        opciones: ["Cóndor", "Zebra", "León"],
        respuestaCorrecta: "Cóndor"
    }
];

let preguntaActual = 0;
let puntuacion = 0;

const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");
const siguienteBtn = document.getElementById("siguiente-btn");
const puntuacionElemento = document.getElementById("puntuacion");

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaElemento.textContent = pregunta.pregunta;
    opcionesElemento.innerHTML = '';

    pregunta.opciones.forEach(opcion => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="respuesta" value="${opcion}"> ${opcion}`;
        opcionesElemento.appendChild(label);
    });
}

mostrarPregunta();

siguienteBtn.addEventListener("click", () => {
    const respuesta = document.querySelector('input[name="respuesta"]:checked');
    if (respuesta) {
        const respuestaSeleccionada = respuesta.value;
        const pregunta = preguntas[preguntaActual];
        if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
            puntuacion++;
        }

        preguntaActual++;
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            preguntaElemento.textContent = "¡Juego terminado!";
            opcionesElemento.innerHTML = '';
            siguienteBtn.style.display = "none";
            puntuacionElemento.textContent = `Puntuación: ${puntuacion}/${preguntas.length}`;
        }
    }
});
