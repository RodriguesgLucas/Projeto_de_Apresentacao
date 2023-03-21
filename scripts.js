const menuBar = document.querySelector(".menubar");
const navMenu = document.querySelector(".nav-menu");

menubar.addEventListener("click", () => {
    menuBar.classList.toggle('active');
    navMenu.classList.toggle('active');
})