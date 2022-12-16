// JavaScript to handle anchor link clicks
const anchorLinks = document.querySelectorAll("a[href^='#']");
anchorLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); // prevent the default anchor link behavior
    const targetId = event.target.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
