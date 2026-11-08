document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});

if (document.querySelector(".skills-swiper") && typeof Swiper !== "undefined") {
  new Swiper(".skills-swiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  });
}
