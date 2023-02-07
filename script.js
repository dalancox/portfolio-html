//JavaScript to handle anchor link clicks
const anchorLinks = document.querySelectorAll("a[href^='#']");
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-back");
const nextButton = document.getElementById("slide-arrow-forward");
const slideCounter =
  document.getElementById("slides-container").childElementCount;

let start = 0;

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
  start++;

  if (start == slideCounter) {
    slidesContainer.scrollLeft -= 1896;
    start = 0;
  }
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;

  if (start > 0) {
    start--;
  } else if (start >= 0) {
    slidesContainer.scrollLeft += 1896;
    start = slideCounter - 1;
  }
});
