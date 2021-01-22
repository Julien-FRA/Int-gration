console.log('Hello World');

// Javascript pour le menu burger
// Ici on défini les variables pour le burger menu
var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");
var menuLinks = document.querySelectorAll(".menuLink");

// Ici on écoute le click sur le burger
ham.addEventListener("click", toggleHamburger);

// Ici on crée la fonction du click
function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
};

// Ici on écoute le clique de chaque lien
menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleHamburger) 
    }
);

//Carousel produits similaires 

const slides = document.querySelector('.carousel-card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const count = document.querySelectorAll('.card1').length;
let current = 0;

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);

function prev() {
  if (current > 0) {
    current--;
    update();
  }
}

function next() {
  if (current < count - 1) {
    current++;
    update(); 
  }
}

function update() {
  const transform = -100 * current;
  slides.style.transform = `translateX(${transform}vw)`;
}
