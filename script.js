console.log('Hello World');

// Javascript for the burger menu
// Here we define the variables for the burger menu
var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");
var menuLinks = document.querySelectorAll(".menuLink");

// Here we listen to the click on the burger
ham.addEventListener("click", toggleHamburger);

// Here we create the click function
function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
};

// IHere we listen to the click of each link
menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleHamburger) 
    }
);