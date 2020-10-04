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
  displacementImage: "assets/img/diss.png",
  imagesRatio: 450 / 300,
});
