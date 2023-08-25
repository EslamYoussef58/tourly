'use strict';

const overlay = document.querySelector(".overlay");
const navOpenBtn = document.querySelector(".nav-open-btn");
const navbar = document.querySelector(".navbar");
const navCloseBtn = document.querySelector(".nav-close-btn");
const navLinks = document.querySelectorAll(".navbar-link");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navElemAr = function (elem) {
    for (let i = 0; i < elem.length; i ++) {
        elem[i].addEventListener("click", function() {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        })
    }
}
navElemAr(navElemArr);
navElemAr(navLinks);

const header = document.querySelector(".header");
const goToTop = document.querySelector(".go-top");

window.addEventListener("scroll", function(){
    if(window.scrollY >= 200) {
        header.classList.add("active");
        goToTop.classList.add("active");
    }else {
        header.classList.remove("active");
        goToTop.classList.remove("active");
    }
})