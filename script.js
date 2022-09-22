// BOTÃO MENU
function abrirMenu() {
  const btnMenu = document.getElementById("btn-menu");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault;
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
  }

  btnMenu.addEventListener("click", toggleMenu);
  btnMenu.addEventListener("touchstart", toggleMenu);
}
abrirMenu();
