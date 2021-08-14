"use strict"

let menu = document.getElementById("nav-links")

const toggle = function () {
    if (screen.width < 768) {
        console.log('mobile size');
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }

}
// adding this line of code just in case someone resizes their window from mobile size to desktop size
window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        menu.style.display = "block";
        console.log("Screen width is at least 768px")
    } else {
        console.log("Screen less than 768px")
    }
})

// document.getElementById("ham-btn").addEventListener("click", toggle);
document.getElementById("nav-links").addEventListener("click", toggle);