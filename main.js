"use strict"


const toggle = function () {
    let menu = document.getElementById("nav-links")
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// document.getElementById("ham-btn").addEventListener("click", toggle);
document.getElementById("nav-links").addEventListener("click", toggle);