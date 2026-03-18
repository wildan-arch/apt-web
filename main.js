const btn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

btn.addEventListener("click", function () {
  navLinks.classList.toggle("show-menu");
});
