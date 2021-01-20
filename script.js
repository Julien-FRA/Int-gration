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
