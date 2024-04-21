const themeSwitcher = document.querySelector("#theme-switcher");

/* Upate Theme Icon & Text*/
const updateThemeIcon = (isDarkMode) => {
    themeSwitcher.children[0].textContent = isDarkMode
        ? "Dark Mode"
        : "Light Mode";
    themeSwitcher.children[1].classList.replace(
        isDarkMode ? "fa-sun" : "fa-moon",
        isDarkMode ? "fa-moon" : "fa-sun"
    );
};

//Determine if dark mode is prefered

const prefersDarkMode = () => {
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
};

//Set the theme on the preference
const setThemeBasedOnPreference = () => {
    const isDarkMode = prefersDarkMode();
    document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light"
    );
    updateThemeIcon(isDarkMode);
};

/* Switch Theme */

const switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme === "dark");
};

//Event Listeners

themeSwitcher.addEventListener("click", switchTheme);

//Check Local Storage for Theme

const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        updateThemeIcon(savedTheme === "dark");
    } else {
        setThemeBasedOnPreference();
    }
};

//Listen fon system theme changes
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", setThemeBasedOnPreference);

//Initialize theme when the script loads
initializeTheme();

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
