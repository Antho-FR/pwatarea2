function iniciarTemporizador() {
  const tiempoInput = document.getElementById('tiempo');
  const tiempoRestante = document.getElementById('temporizador');
  let tiempo = parseInt(tiempoInput.value);

  if (isNaN(tiempo) || tiempo <= 0) {
    alert('Por favor, introduce un tiempo válido en segundos.');
    return;
  }

  const intervalId = setInterval(function () {
    if (tiempo <= 0) {
      clearInterval(intervalId);
      tiempoRestante.textContent = '¡Tiempo terminado!';
    } else {
      tiempoRestante.textContent = `Tiempo restante: ${tiempo} segundos`;
      tiempo--;
    }
  }, 1000); // Actualiza cada segundo (1000 ms)
}