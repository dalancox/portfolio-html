const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const mobileBtn = document.getElementById("mobile-nav__btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const hamb = document.getElementById("hamburger-menu");
const mobileList = document.getElementById("mobile-list");

mobileBtn.addEventListener("click", () => {
  mobileDrawer.classList.remove("active");
});

hamb.addEventListener("click", () => {
  console.log("click");
  mobileDrawer.classList.add("active");
});

mobileList.addEventListener("click", () => {
  mobileDrawer.classList.remove("active");
});
