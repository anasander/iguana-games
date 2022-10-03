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

// BOTÃO CHAT
function abreFormulario() {
  document.getElementById("formulario").style.display = "block";
}

function fechaFormulario() {
  document.getElementById("formulario").style.display = "none";
}

// BOTÃO CARREGAR MAIS
function carregarMais() {
  document.getElementById("jogos-hidden").style.display = "block";
  document.getElementById("carregar-mais").style.display = "none";
}

// GALERIA DE IMAGENS
const galeria = document.querySelectorAll(".pagina-jogo-galeria img");
const galeriaTudo = document.querySelector(".pagina-jogo-galeria");

function trocarImagens(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 700px)").matches;
  if (media) {
    galeriaTudo.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagens);
}

galeria.forEach(eventoGaleria);

// SLIDESHOW
var slideIndex = 1;
function showDivs(slideIndex) {}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var show = document.getElementsByClassName("slideshow");
  if (n > show.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = show.length;
  }
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "none";
  }
  show[slideIndex - 1].style.display = "block";
}

// ANIMAÇÃO
var slideIndex = 0;

function changeSlide() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(changeSlide, 10000);
}
changeSlide();
