//Navigation ----------------------------------------
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

//Slideshow ------------------------------------------------
let currentImageIndex = 0;
const images = document.querySelectorAll(".slide");

const switchImage = () => {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
};

setInterval(switchImage, 5000);

/* Banner ------------------------------------------------- */

const bannerContent = document.getElementById("bannerContent");
let messageHTML =
    "<span class='contact-message'>Contact us at email@example.com We are here to help! </span>";
let repeatedMessage = messageHTML.repeat(10);

//Set the repeated messages as the content
bannerContent.innerHTML = repeatedMessage + repeatedMessage;

//Houdini Worklet

CSS.paintWorklet.addModule("https://unpkg.com/parallelowow/parallelowow.js");
