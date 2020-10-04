// ----- NAVBAR SHOW AND HIDDEN -----
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Show Navbar
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

// Hidden Navbar
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// ----- HOVER IMAGE EFFECT ----
new hoverEffect({
  parent: document.querySelector(".home__img"),
  intensity: 0.3,
  image1: "img/img1.jpg",
  image2: "img/img2.jpg",
  displacementImage: "img/diss.png",
  imagesRatio: 450 / 300,
});

// ----- GASP -----

// NAV, TITLE, IMG
gsap.from(".nav, .nav__item", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: -30,
  stagger: 0.2,
});

gsap.from(".home__title", {
  opacity: 0,
  duration: 1.2,
  delay: 1.2,
  y: -30,
});

gsap.from(".home__img", {
  opacity: 0,
  duration: 1.3,
  delay: 1.3,
  y: -50,
});

// SOCIAL, SUBTITLE, BUTTON
gsap.from(".home__social", {
  opacity: 0,
  duration: 1.5,
  delay: 1,
  y: 50,
});

gsap.from(".home__subtitle", {
  opacity: 0,
  duration: 1.8,
  delay: 1,
  y: 50,
});

gsap.from(".home__button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 50,
});
