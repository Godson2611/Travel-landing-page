let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let bod = document.querySelector(".container");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
