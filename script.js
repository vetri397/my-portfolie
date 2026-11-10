// ===================================
// MOBILE NAVIGATION
// ===================================

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}


// ===================================
// TYPING ANIMATION
// ===================================

const words = [
    "AI & Data Science Student",
    "Machine Learning Enthusiast",
    "Python Developer",
    "Computer Vision Enthusiast",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } 
    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}


// ===================================
// CLOSE MOBILE MENU AFTER CLICK
// ===================================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        const navLinks = document.getElementById("navLinks");

        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});


// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===================================
// START WHEN PAGE LOADS
// ===================================

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});