const menuheader = document.querySelector(".menu")
const navlinks = document.querySelector(".navlinks")

menuheader.addEventListener("click", ()=>{
    navlinks.classList.toggle('mobile-menu')
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      "@2.00": {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });