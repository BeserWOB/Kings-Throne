
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


  let svgIcon1 = document.getElementById('svg-1');
  let svgIcon2 = document.getElementById('svg-2');
  let svgIcon3 = document.getElementById('svg-3');
  let svgIcon4 = document.getElementById('svg-4');
  let svgIcon5 = document.getElementById('svg-5');
  let svgIcon6 = document.getElementById('svg-6');

  let svgIcon1Bottom = svgIcon1.getBoundingClientRect().bottom;
  let svgIcon2Bottom = svgIcon2.getBoundingClientRect().bottom;
  let svgIcon3Bottom = svgIcon3.getBoundingClientRect().bottom;
  let svgIcon4Bottom = svgIcon4.getBoundingClientRect().bottom;
  let svgIcon5Bottom = svgIcon5.getBoundingClientRect().bottom;
  let svgIcon6Bottom = svgIcon6.getBoundingClientRect().bottom;



    if(window.innerHeight > svgIcon1Bottom){
      svgIcon1.classList.add('svg-icon-animate')
    }
    if(window.innerHeight > svgIcon2Bottom){
      svgIcon2.classList.add('svg-icon-animate')
    }
    if(window.innerHeight > svgIcon3Bottom){
      svgIcon3.classList.add('svg-icon-animate')
    }
    if(window.innerHeight > svgIcon4Bottom){
      svgIcon4.classList.add('svg-icon-animate')
    }
    if(window.innerHeight > svgIcon5Bottom){
      svgIcon5.classList.add('svg-icon-animate')
    }
    if(window.innerHeight > svgIcon6Bottom){
      svgIcon6.classList.add('svg-icon-animate')
    }

  





  });



/* SVG Path length calculator */
/*   const pathLength = document.querySelectorAll('#svgg path')

for(let i = 0; i < pathLength.length; i++){
  console.log(`SVG ${i} is ${pathLength[i].getTotalLength().toFixed(1)} px long`);
} */
