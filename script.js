const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}
function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}
showSlider();
btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);

const mockupDiv = document.getElementById("mockup-hero-desk");
const imagens = mockupDiv.querySelectorAll("img");

let indiceAtual = 0;

function mostrarImagem(index) {
  imagens.forEach((img, i) => {
    img.classList.toggle("ativo", i === index);
  });
}
mostrarImagem(indiceAtual);

setInterval(() => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
}, 2500);

// --------------------------------------------------------------------------
const mockupDivMobile = document.getElementById("mockup-hero-mobile");
const imagensMobile = mockupDivMobile.querySelectorAll("img");

let indiceAtualMobile = 0;

function mostrarImagemMobile(index) {
  imagensMobile.forEach((img, i) => {
    img.classList.toggle("ativo-mobile", i === index);
  });
}
mostrarImagemMobile(indiceAtualMobile);

setInterval(() => {
  indiceAtualMobile = (indiceAtualMobile + 1) % imagensMobile.length;
  mostrarImagemMobile(indiceAtualMobile);
}, 2500);
// --------------------------------------------------------------------------

const imagesContainer = document.getElementById("image-card-container");
const imagesCards = imagesContainer.querySelectorAll("div");

let indiceAtualComparison = 0;

function mostrarImagemComparison(index) {
  imagesCards.forEach((div, i) => {
    div.classList.toggle("on", i === index);
  });
}
mostrarImagemComparison(indiceAtualComparison);

setInterval(() => {
  indiceAtualComparison = (indiceAtualComparison + 1) % imagesCards.length;
  mostrarImagemComparison(indiceAtualComparison);
}, 3000);

function showNav() {
  const navBar = document.querySelector(".nav-links-mobile");
  navBar.classList.remove=".nav-links-mobile"
}

showNav()