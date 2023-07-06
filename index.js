
/* Onscroll header turns white */
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let logo = document.querySelector(".logo");

  if (window.scrollY > 30) {
    header.classList.add("navbar-scroll");
    logo.classList.add("logo-scroll");
  } else {
    header.classList.remove("navbar-scroll");
    logo.classList.remove("logo-scroll");
  }
});

/* Onscroll Header is transparent when it comes to images section */
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

/* Onscroll animation of the SVG Icons for breed section */
window.addEventListener('scroll', () => {
  let svgIcons = document.querySelectorAll('.svg-icon');

  svgIcons.forEach(svgIcon => {
    let svgIconTop = svgIcon.getBoundingClientRect().top;
    let svgIconBottom = svgIcon.getBoundingClientRect().bottom;

    // Get the bottom position of the viewport
    let viewportBottom = window.innerHeight;

    if (svgIconTop < viewportBottom && svgIconBottom > 0) {
      setTimeout(() => {
        svgIcon.classList.add("svg-icons-animate");
      }, 100); // Adjust the delay as needed
    } else {
      svgIcon.classList.remove("svg-icons-animate");
    }
  });
});



console.log(document.querySelectorAll('.svg-icon'));

/* SVG Path length calculator */
/*   const pathLength = document.querySelectorAll('#svgg path')

for(let i = 0; i < pathLength.length; i++){
  console.log(`SVG ${i} is ${pathLength[i].getTotalLength().toFixed(1)} px long`);
} */
