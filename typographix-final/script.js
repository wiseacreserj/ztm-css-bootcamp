document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth <= 1025;

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
    createObserver(
        "#about .phrase",
        { root: null, treshold: isMobile ? 0.5 : 1 },
        "active"
    );
    createObserver(
        "#gallery .image-box",
        { root: null, treshold: isMobile ? 0.5 : 1 },
        "active"
    );
    createObserver(
        "#blog .featured-article, #blog .article",
        { root: null, treshold: isMobile ? 0 : 0.3 },
        "fadeInUp"
    );
    createObserver(
        "#contact > div",
        { root: null, treshold: isMobile ? 0 : 0.5 },
        "fadeInUp"
    );
});

//Navigation -------------------------------------------
const nav = document.querySelector("#nav");
const menuIcon = document.querySelector(".menu-icon");
const listItems = document.querySelectorAll("#nav ul lia a");

const toggleMenu = () => {
    nav.classList.toggle("active");
    menuIcon.classList.toggle("active");
    listItems.forEach((listItem) => {
        listItem.classList.toggle("active");
    });
};

const hideMenu = () => {
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
    listItems.forEach((listItem) => {
        listItem.classList.remove("active");
    });
};

//Form Submition -------------------------------------------
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                form.reset();
                const toast = document.getElementById("toast");
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 10000);
            } else {
                //Handle error

                alert("Form sumbission failed");
            }
        })
        .catch((error) => console.error("Error", error));
});
