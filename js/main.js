
const iconOpen = document.querySelector(".fa-bars-staggered");
const casa = document.querySelector(".casa");
const acerca = document.querySelector(".acerca");
const hab = document.querySelector(".hab");
const exper = document.querySelector(".exper");
const port = document.querySelector(".port");
const contact = document.querySelector(".contact");
const menu = document.querySelector(".menu");

[iconOpen, casa, acerca, hab, exper, port, contact].forEach((icon) => {
    icon.addEventListener("click", () => menu.classList.toggle('menu__show'));
});




