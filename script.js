let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
