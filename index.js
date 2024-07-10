let mode = document.querySelector("body");
let box = document.querySelector(".box");
let container = document.querySelector(".container");
let img = document.querySelector("img");

let currentmode = "light";

container.addEventListener("click", () => {
    if (currentmode == "light") {
        // For dark mode
        currentmode = "dark";
        mode.style.backgroundColor = "black";
        box.style.transform = "translateX(100%)";
        container.style.backgroundColor = "blue";
        box.style.backgroundColor = "white";
        img.src = "dark_mode_FILL0_wght400_GRAD0_opsz24.png";
        img.style.filter = "invert(0)";
    } else {
        // For white mode
        currentmode = "light";
        mode.style.backgroundColor = "white";
        box.style.transform = "translateX(0%)";
        container.style.backgroundColor = "white";
        box.style.backgroundColor = "black";
        img.src = "wb_sunny_FILL0_wght400_GRAD0_opsz24.png";
        img.style.filter = "invert(1)";
    }
});