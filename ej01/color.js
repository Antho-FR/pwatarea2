// Agrega un evento de clic al botón
document.getElementById("cambiarColorBoton").addEventListener("click", function() {
  // Genera un color aleatorio
  var colorAleatorio = "#" + ((1 << 24) * Math.random() | 0).toString(16);

  // Cambia el color de fondo del elemento
  document.getElementById("elementoCambiante").style.backgroundColor = colorAleatorio;
});





