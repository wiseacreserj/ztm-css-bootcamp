const goldBar = document.querySelector(".gold-bar");
const blackBar = document.querySelector(".black-bar");
const bottomBar = document.querySelector(".bottom-bar");
const topBar = document.querySelector(".top-bar");
const textLayer = document.querySelector(".main-bar-text");
const bottomBarText = document.querySelector(".bottom-bar .bottom-bar-text");
const logo = document.querySelector(".img-container");

const runAnimationIN = () => {
    //Re-run animations
    logo.style.animation = "revealLeft 0.5s linear forwards";
    goldBar.style.animation = "slideIn 0.5s ease-in-out forwards 0.1s";
    blackBar.style.animation = "slideIn 0.5s ease-in-out forwards 0.1s";
    bottomBar.style.animation =
        "slideDownBottom 0.6s ease-in-out 0.2s forwards";
    topBar.style.animation = "slideUpTop 0.5s ease-in forwards 0.2s";
};

const runAnimationOut = () => {
    //Set clip path to match end of animation in
    goldBar.style.clipPath = "polygon(15px 0, 100% 0, 100% 100%, 0% 100%)";
    blackBar.style.clipPath = "polygon(15px 0, 100% 0, 100% 100%, 0% 100%)";

    //Re-run animations
    logo.style.animation = "hideLeft 0.5s linear forwards";
    goldBar.style.animation = "slideOut 0.4s ease-in-out forwards 0.3s";
    blackBar.style.animation = "slideOut 0.4s ease-in-out forwards 0.2s";
    bottomBar.style.animation = "slideUpBottom 0.3s ease-in-out  forwards";
    topBar.style.animation = "slideDownTop 0.3s ease-in forwards ";
};

//Keyboard Shortcut to Toggle Animations

let isGraphicVisible = true;

window.addEventListener("keydown", (event) => {
    event.preventDefault();
    //Check if the pressed key code is "Space" for spacebar
    if (event.code === "Space") {
        if (isGraphicVisible) {
            runAnimationOut();
            isGraphicVisible = false;
        } else {
            location.reload();
            isGraphicVisible = true;
        }
    }
});

//Adjust bar width to fit text

const adjustBarWidth = () => {
    //Get width of main text amd bottom text
    const textLayerWidth = textLayer.offsetWidth;
    const bottomBarTextWidth = bottomBarText.offsetWidth;

    //add margin left from main text
    const textLayerStyle = window.getComputedStyle(textLayer);
    const marginLeft = parseFloat(
        textLayerStyle.getPropertyValue("margin-left")
    );

    //Use the width of main of bottom text layer, whichever is larger
    const barWidth = Math.max(textLayerWidth, bottomBarTextWidth) + marginLeft;

    //Set width of bars
    blackBar.style.width = barWidth + "px";
    bottomBar.style.width = `${barWidth + 8}px`;
    goldBar.style.width = `${barWidth + 15}px`;
};

window.onload = () => adjustBarWidth();
