window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
      header.classList.add('navbar-scroll');
    } else {
      header.classList.remove('navbar-scroll');
    }
  });



  window.addEventListener('scroll', function() {
    let carouselSection = document.getElementById('images-section');
    let header = document.querySelector('.header');
    let navbarBottom = document.querySelector('.header').getBoundingClientRect().bottom;
  
    let carouselSectionTop = carouselSection.getBoundingClientRect().top;
    let carouselSectionBottom = carouselSection.getBoundingClientRect().bottom;
  
    if (carouselSectionTop < navbarBottom && carouselSectionBottom > navbarBottom) {
      header.classList.add('transparent-header');
    } else {
      header.classList.remove('transparent-header');
    }
  });
  