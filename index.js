window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
      header.classList.add('navbar-scroll');
    } else {
      header.classList.remove('navbar-scroll');
    }
  });