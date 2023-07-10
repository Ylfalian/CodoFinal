//Menú mobile//

const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector ('.nav-links')

menuBtn.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
})
//SLIDER

// Acceso a las imágenes
const slideImages = document.querySelectorAll('#images');

// Acceso a los botones del DOM
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// Acceso a los indicadores del DOM
const indicadores = document.querySelectorAll('.indicador');

var contador = 0;

// Código para los botones next y prev

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

function slideNext() {
  slideImages[contador].style.animation = 'next1 0.5s ease-in forwards';
  indicadores[contador].classList.remove('active');
  if (contador >= slideImages.length - 1) {
    contador = 0;
  } else {
    contador++;
  }
  slideImages[contador].style.animation = 'next2 0.5s ease-in forwards';
  indicadores[contador].classList.add('active');
}

function slidePrev() {
  slideImages[contador].style.animation = 'prev1 0.5s ease-in forwards';
  indicadores[contador].classList.remove('active');
  if (contador <= 0) {
    contador = slideImages.length - 1;
  } else {
    contador--;
  }
  slideImages[contador].style.animation = 'prev2 0.5s ease-in forwards';
  indicadores[contador].classList.add('active');
}
