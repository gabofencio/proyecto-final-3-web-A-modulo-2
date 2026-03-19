var swiper = new Swiper(".my-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: { slidesPerView: 1 },
    900: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
});