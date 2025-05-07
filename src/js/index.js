// import mobileNav from "./modules/mobile-nav.js";
// mobileNav();

import sectionSkillet from "./modules/sectionSkillet.js";

console.log(sectionSkillet());

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  spaceBetween: 40,
  centeredSlides: true,

  keyboard: {
    enabled: true,
  },
});
