/* Onscroll header turns white */
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let logo = document.querySelector(".logo");

  if (window.scrollY > 30) {
    header.classList.add("header-scroll");
    logo.classList.add("logo-scroll");
  } else {
    header.classList.remove("header-scroll");
    logo.classList.remove("logo-scroll");
  }
});

/* Onscroll Header is transparent when it comes to images section */
/* 
window.addEventListener("scroll", function () {
  let carouselSection = document.getElementById("images");
  let header = document.querySelector(".header");
  let logo = document.querySelector(".logo");
  let navbarBottom = document
    .querySelector(".header")
    .getBoundingClientRect().bottom;

  let carouselSectionTop = carouselSection.getBoundingClientRect().top;
  let carouselSectionBottom = carouselSection.getBoundingClientRect().bottom;

  if (
    carouselSectionTop < navbarBottom &&
    carouselSectionBottom > navbarBottom
  ) {
    header.classList.add("transparent-header");
    logo.classList.remove("logo-scroll");
  } else {
    header.classList.remove("transparent-header");
  }
});
 */

/* Onscroll animation of the SVG Icons for breed section */
window.addEventListener("scroll", () => {
  const svgIcons = [
    { element: document.getElementById("svg-1"), bottom: 0 },
    { element: document.getElementById("svg-2"), bottom: 0 },
    { element: document.getElementById("svg-3"), bottom: 0 },
    { element: document.getElementById("svg-4"), bottom: 0 },
    { element: document.getElementById("svg-5"), bottom: 0 },
    { element: document.getElementById("svg-6"), bottom: 0 },
  ];

  svgIcons.forEach((svgIcon) => {
    svgIcon.bottom =
      svgIcon.element.getBoundingClientRect().bottom + window.innerHeight / 5;

    if (window.innerHeight > svgIcon.bottom) {
      svgIcon.element.classList.add("svg-icon-animate");
    }
  });
});

/* SVG Path length calculator */
/*   const pathLength = document.querySelectorAll('#svgg path')

for(let i = 0; i < pathLength.length; i++){
  console.log(`SVG ${i} is ${pathLength[i].getTotalLength().toFixed(1)} px long`);
} */
