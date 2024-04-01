//Loading animation

const getRandomColor = () => {
    return "#" + Math.random().toString(16).slice(-6);
};

const setRandomColors = () => {
    document.querySelector(".color1").style.backgroundColor = getRandomColor();
    document.querySelector(".color2").style.backgroundColor = getRandomColor();
    document.querySelector(".color3").style.backgroundColor = getRandomColor();
};

setRandomColors();
setInterval(setRandomColors, 2000);

//Allow for selection of image trigger modal view

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.title = "Click to Enlagre";
    item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        //Create the modal div
        const modal = document.createElement("div");
        modal.classList.add("modal");
        //Create img element
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = "Enlarged Abstract Image";
        //Append the img to modal
        modal.appendChild(imgElement);
        //Add the modal to the body
        document.body.appendChild(modal);
        setTimeout(() => {
            imgElement.classList.add("reveal");
        }, 10);
        //Remove the modal when it's clicked
        modal.addEventListener("click", () => {
            imgElement.classList.remove("reveal");
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    });
});

//Function to check if page is scrolled and adjust the logo size

const checkScroll = () => {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    let scrollPosition = window.scrollY;

    // Add/Remove scrolled class based on scrollPositon
    if (scrollPosition > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    //Calculate new font-size based on scrollPosition

    let newSize = 3 - scrollPosition * 0.03; // Decrease by 0.03rem for every 1px scrolled
    //Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);
    logo.style.fontSize = newSize + "rem";
};

//Event Listener for scroll event

window.addEventListener("scroll", checkScroll);
