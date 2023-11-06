// Agregar un controlador de clic para mostrar/ocultar submenús
const menu = document.getElementById("menu");
const submenus = document.querySelectorAll(".submenu");

menu.addEventListener("click", (e) => {
  if (e.target.nextElementSibling && e.target.nextElementSibling.classList.contains("submenu")) {
    const submenu = e.target.nextElementSibling;
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  }
});