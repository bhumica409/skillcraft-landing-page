window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}