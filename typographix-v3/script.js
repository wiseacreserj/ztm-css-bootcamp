const themeSwitcher = document.querySelector("#theme-switcher");

/* Dark Mode Styles */
const darkMode = () => {
    themeSwitcher.children[0].textContent = "Dark Mode";
    themeSwitcher.children[1].classList.replace("fa-sun", "fa-moon");
};

/* Light Mode Styles */
const lightkMode = () => {
    themeSwitcher.children[0].textContent = "Light Mode";
    themeSwitcher.children[1].classList.replace("fa-moon", "fa-sun");
};

/* Switch Theme */

const switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme || currentTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightkMode();
    }
};

//Event Listeners

themeSwitcher.addEventListener("click", switchTheme);

//Check Local Storage for Theme

const currentThemeFromLocalStorage = localStorage.getItem("theme");
if (currentThemeFromLocalStorage) {
    document.documentElement.setAttribute(
        "data-theme",
        currentThemeFromLocalStorage
    );
    if (currentThemeFromLocalStorage === "dark") {
        darkMode();
    } else {
        lightkMode;
    }
}

//Navigation
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
