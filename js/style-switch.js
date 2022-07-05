/* Toggle Style Switch */
const styleSwitcherToggle = document.querySelector(".style-switch-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switch").classList.toggle("open");
})

// Hide style switch on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switch").classList.contains("open")) {
        document.querySelector(".style-switch").classList.remove("open");
    }
})

/* Theme color */
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

/* Light-Dark */
const dayNight = document.querySelector(".night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})