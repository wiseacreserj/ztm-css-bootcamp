//Navigation -------------------------------------------
const nav = document.querySelector("#nav");
const menuIcon = document.querySelector(".menu-icon");

const toggleMenu = () => {
    nav.classList.toggle("active");
    menuIcon.classList.toggle("active");
};

const hideMenu = () => {
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
};
