document.addEventListener("DOMContentLoaded", () => {
  // ----- Slider -----
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const slides = slider.querySelector("[data-slides]");
    const prevBtn = slider.querySelector("[data-prev]");
    const nextBtn = slider.querySelector("[data-next]");
    const total = slides.children.length;
    let index = 0;

    function updateSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + total) % total;
      updateSlide();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % total;
      updateSlide();
    });
  });

  // ----- See More / See Less -----
  document.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const para = btn.previousElementSibling; // the <p>
      para.classList.toggle("line-clamp-3");

      if (para.classList.contains("line-clamp-3")) {
        btn.textContent = "See more";
      } else {
        btn.textContent = "See less";
      }
    });
  });
});
