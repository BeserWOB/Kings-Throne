window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let logo = document.querySelector('.logo');


    if (window.scrollY > 30) {
      header.classList.add('navbar-scroll');
      logo.classList.add('logo-scroll');
    } else {
      header.classList.remove('navbar-scroll');
      logo.classList.remove('logo-scroll');
    }
  });



  window.addEventListener('scroll', function() {
    let carouselSection = document.getElementById('images');
    let header = document.querySelector('.header');
    let logo = document.querySelector('.logo');
    let navbarBottom = document.querySelector('.header').getBoundingClientRect().bottom;
  
    let carouselSectionTop = carouselSection.getBoundingClientRect().top;
    let carouselSectionBottom = carouselSection.getBoundingClientRect().bottom;
  
    if (carouselSectionTop < navbarBottom && carouselSectionBottom > navbarBottom) {
      header.classList.add('transparent-header');
      logo.classList.remove('logo-scroll');
    } else {
      header.classList.remove('transparent-header');
    }
  });
  

/* SVG Path length calculator */
/*   const pathLength = document.querySelectorAll('#svgg path')

for(let i = 0; i < pathLength.length; i++){
  console.log(`SVG ${i} is ${pathLength[i].getTotalLength().toFixed(1)} px long`);
} */