//JavaScript to handle anchor link clicks
const anchorLinks = document.querySelectorAll("a[href^='#']");
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-back");
const nextButton = document.getElementById("slide-arrow-forward");

let width = 0;

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // prevent the default anchor link behavior
    const targetId = event.target.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  width += slideWidth;
  if (width > 1422) {
    slidesContainer.scrollLeft -= width;
    width = 0;
  }
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  console.log(width);

  if (width === 0) {
  } else {
    width -= 474;
  }
});
