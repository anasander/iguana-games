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

// FORMAS DE PAGAMENTO
function cartao() {
  document.getElementById("opcao-cartao").style.display = "block";
  document.getElementById("opcao-pix").style.display = "none";
  document.getElementById("opcao-boleto").style.display = "none";
  document.getElementById("btn-comprar").style.display = "block";
}

function pix() {
  document.getElementById("opcao-pix").style.display = "block";
  document.getElementById("opcao-cartao").style.display = "none";
  document.getElementById("opcao-boleto").style.display = "none";
  document.getElementById("btn-comprar").style.display = "block";
}

function boleto() {
  document.getElementById("opcao-boleto").style.display = "block";
  document.getElementById("opcao-cartao").style.display = "none";
  document.getElementById("opcao-pix").style.display = "none";
  document.getElementById("btn-comprar").style.display = "none";
}

// ALERTA CODIGO SEGURANCA
function alerta() {
  alert(
    "O Código de Segurança pode ser geralmente encontrado na parte de trás do seu cartão, composto de 3 números."
  );
}

// GALERIA DE IMAGENS
const galeria = document.querySelectorAll(".pagina-jogo-galeria img");
const galeriaTudo = document.querySelector(".pagina-jogo-galeria");

const trocarImagens = (event) => {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 700px)").matches;
  if (media) {
    galeriaTudo.prepend(img);
  }
};

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagens);
}

galeria.forEach(eventoGaleria);

// SLIDESHOW
let slideIndex = 1;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let show = document.getElementsByClassName("slideshow");
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
let slideIndexNew = 0;

const changeSlide = () => {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexNew++;
  if (slideIndexNew > slides.length) {
    slideIndexNew = 1;
  }
  slides[slideIndexNew - 1].style.display = "block";
  setTimeout(changeSlide, 10000);
};
// changeSlide(); vvv ler abaixo!

// Ao iniciar a funcao 'changeSlide' ao final da mesma para que ela
// inicie a mudanca de slides do HTML, sempre surgia um erro
// 'slides[slideIndexNew - 1] is not defined'.
// Retirar a inicializacao ao final da funcao e ao invés disso
// a inicializar no 'body' do documento, o erro desaparece
// e o console da pagina funciona normalmente.
// Me parece que o JS iniciava mais rapido do que as imagens surgiam,
// entao o erro aparecia (como se nao houvesse nada para usar na funcao).
