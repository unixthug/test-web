const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

state = 0;
const button = document.getElementById("kuromi-button");
button.addEventListener('click', function() { 
    kuromi = document.getElementById("pic");
    if (state == 0) {
         kuromi.src = "img/source.gif";
         state = 1;
    } else {
         kuromi.src = "img/image0.jpeg";
         state = 0;
    }
});

let top_button = document.getElementById("top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
}