import "lazysizes";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperBusiness = new Swiper(".swiper-business", {
    slidesPerView: "auto",
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-business-next",
        prevEl: ".swiper-business-prev"
    }
});

const swiperWork = new Swiper(".swiper-work", {
    slidesPerView: "auto",
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-work-next",
        prevEl: ".swiper-work-prev"
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarMobile = document.getElementById("navbarMobile");
    const navbarMobileBtnOpen = document.getElementById("navbarMobileBtnOpen");
    const navbarMobileBtnClose = document.getElementById("navbarMobileBtnClose");

    function toggleNavbarVisibility() {
        navbarMobile.classList.toggle("translate-x-full");
    }

    navbarMobileBtnOpen.addEventListener("click", toggleNavbarVisibility);
    navbarMobileBtnClose.addEventListener("click", toggleNavbarVisibility);
});
