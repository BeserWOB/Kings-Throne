
fetch('website_content.json')
.then(response => response.json())
.then(data => {
    let dataJSON = data;
})
.catch(error => console.error('Error fetching JSON:', error));

/* Onscroll header turns black */
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

/* Onscroll animation of the "Lands" Icons for lands section */
window.addEventListener("scroll", () => {
  const landsIcons = [
    { element: document.getElementById("land-1"), bottom: 0 },
    { element: document.getElementById("land-2"), bottom: 0 },
    { element: document.getElementById("land-3"), bottom: 0 },
    { element: document.getElementById("land-4"), bottom: 0 },
    { element: document.getElementById("land-5"), bottom: 0 },
    { element: document.getElementById("land-6"), bottom: 0 },
    { element: document.getElementById("land-7"), bottom: 0 },
    { element: document.getElementById("land-8"), bottom: 0 },
    { element: document.getElementById("land-9"), bottom: 0 },
    { element: document.getElementById("land-10"), bottom: 0 },
    { element: document.getElementById("land-11"), bottom: 0 },
    { element: document.getElementById("land-12"), bottom: 0 },
    { element: document.getElementById("land-13"), bottom: 0 },
    { element: document.getElementById("land-14"), bottom: 0 },
    { element: document.getElementById("land-15"), bottom: 0 },
  ];

  landsIcons.forEach((landsIcon) => {
    landsIcon.bottom =
    landsIcon.element.getBoundingClientRect().bottom + window.innerHeight / 5;

    if (window.innerHeight > landsIcon.bottom) {
      landsIcon.element.classList.add("lands-animated");
    }
  });
});


/* carousel swiping enabled */
$(document).ready(function() {
  $('.carousel').carousel({
    touch: true
  });
});





/* lands-animated */

/* SVG Path length calculator */
/*   const pathLength = document.querySelectorAll('#svgg path')

for(let i = 0; i < pathLength.length; i++){
  console.log(`SVG ${i} is ${pathLength[i].getTotalLength().toFixed(1)} px long`);
} */
