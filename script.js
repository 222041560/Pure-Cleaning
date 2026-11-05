// =========================================
// PURELY CLEANING SERVICES
// JAVASCRIPT
// =========================================


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});



// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});



// AUTOMATICALLY UPDATE COPYRIGHT YEAR

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
