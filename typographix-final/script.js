document.addEventListener("DOMContentLoaded", () => {
    //Function to create and observe IntersectionObservers

    const createObserver = (selector, observerOptions, toggleClass) => {
        const items = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(toggleClass);
                } else {
                    entry.target.classList.remove(toggleClass);
                }
            });
        }, observerOptions);
        items.forEach((item) => {
            observer.observe(item);
        });
    };

    //Create observers for different sections
    createObserver("#about .phrase", { root: null, treshold: 1 }, "active");
    createObserver(
        "#gallery .image-box",
        { root: null, treshold: 1 },
        "active"
    );
    createObserver(
        "#blog .featured-article, #blog .article",
        { root: null, treshold: 0.3 },
        "fadeInUp"
    );
    createObserver("#contact > div", { root: null, treshold: 0.5 }, "fadeInUp");
});

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
