const goldBar = document.querySelector(".gold-bar");
const blackBar = document.querySelector(".black-bar");
const bottomBar = document.querySelector(".bottom-bar");
const textLayer = document.querySelector(".main-bar-text");
const bottomBarText = document.querySelector(".bottom-bar .bottom-bar-text");

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
